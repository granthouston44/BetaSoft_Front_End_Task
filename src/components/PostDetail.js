import React, {Component} from 'react'

const PostDetail = (props) => {

return(
  <div className="post-detail">
    <p>{props.post.body}</p>
    <h6>User ID: {props.post.userId}</h6>
  </div>
)


}

export default PostDetail
