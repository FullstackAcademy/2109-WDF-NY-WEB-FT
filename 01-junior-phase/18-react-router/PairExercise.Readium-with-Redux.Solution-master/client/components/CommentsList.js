import React from 'react'
import {Link} from 'react-router-dom'

const CommentsList = (props) => {
  const comments = props.comments || []

  return (
    <div id='comments'>
      {
        comments.map(comment => (
          <div className='comment row' key={comment.id}>
            <img src={comment.author.imageUrl} />
            <div className='column'>
              <Link to={`/authors/${comment.author.id}`}>
                <h5>{comment.author.name}</h5>
              </Link>
              <div>{comment.content}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CommentsList
