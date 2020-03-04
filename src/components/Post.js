import React from 'react'
import PostDetail from './PostDetail'

const Post = (props) => {

const capitalize = require('../helpers/capitalize')

return(
  <li>
  <h5>{capitalize(props.children)}</h5>
  <PostDetail postData={props.postData} userData={props.userData}/>
  </li>
)


}

export default Post
