import React from 'react'
import CommentBox from '../containers/CommentBox'

const PostDetail = (props) => {
const capitalize = require('../helpers/capitalize')


return(
  <div className="post-detail">
    <p>{capitalize(props.post.body)}</p>
    <h6>User ID: {props.post.userId}</h6>
    <CommentBox postId={props.post.id}/>
  </div>
)


}

export default PostDetail
