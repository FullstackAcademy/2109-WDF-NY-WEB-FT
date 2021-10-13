import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import CommentsList from './CommentsList'
import AuthorStories from './AuthorStories'
import { connect } from 'react-redux';

import {fetchSingleAuthor, fetchAuthorComments, fetchAuthorStories} from '../store/singleAuthor'

class SingleAuthor extends Component {

  componentDidMount () {
    try {
      const authorId = this.props.match.params.authorId
      this.props.loadSingleAuthor(authorId)
      this.props.loadAuthorComments(authorId)
      this.props.loadAuthorStories(authorId)
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const author = this.props.author.info
    const comments = this.props.author.comments

    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <div id='single-author-nav'>
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route path='/authors/:authorId/comments' render={() => <CommentsList comments={comments} />} />
          <Route path='/authors/:authorId/stories' component={AuthorStories} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.singleAuthor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleAuthor: (id) => dispatch(fetchSingleAuthor(id)),
    loadAuthorComments: (id) => dispatch(fetchAuthorComments(id)),
    loadAuthorStories: (id) => dispatch(fetchAuthorStories(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAuthor)
