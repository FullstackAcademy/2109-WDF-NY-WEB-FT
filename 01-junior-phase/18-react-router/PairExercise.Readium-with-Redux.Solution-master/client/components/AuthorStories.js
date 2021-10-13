import React from 'react'
import StoriesList from './StoriesList'
import {connect} from 'react-redux'

const AuthorStories = (props) => {
  return <StoriesList stories={props.stories} />
}

const mapStateToProps = (state) => {
  return {
    stories: state.singleAuthor.stories
  }
}

export default connect(mapStateToProps)(AuthorStories)

