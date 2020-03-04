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

  if(!props.commentData){
   return <div className="animation-bars">Loading...<div className="lds-facebook"><div></div><div></div><div></div></div></div>
}
  else{
  return (

    <div className="comment-list">
      {commentNodes}
    </div>
  )
}
}



export default CommentList
