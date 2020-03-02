import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const commentNodes = props.commentData.map((comment)=> {
    return(
      <Comment authorProp={comment.email} key={comment.id}>{comment.body}</Comment>
    )
  })

  if(!props.commentToggle){
    return null
  }

  return (

    <div className="comment-list">
      {commentNodes}
    </div>
  )
}



export default CommentList
