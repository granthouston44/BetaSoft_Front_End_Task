import React from 'react'
import PostDetail from './PostDetail'

const Post = (props) => {

const capitalize = require('../helpers/capitalize')


return(
  <li>
  <h5>{capitalize(props.children)}</h5>
  <PostDetail post={props.post}/>
  </li>
)


}

export default Post
