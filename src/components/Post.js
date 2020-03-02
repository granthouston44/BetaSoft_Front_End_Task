import React, {Component} from 'react'
import PostDetail from './PostDetail'

const Post = (props) => {

return(
  <li>
  <h5>{props.children}</h5>
  <PostDetail post={props.post}/>
  </li>
)


}

export default Post
