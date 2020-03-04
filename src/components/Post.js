import React from 'react'
import PostDetail from './PostDetail'

const Post = (props) => {

if(!props.postData || !props.userData) return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;


const capitalize = require('../helpers/capitalize')

return(
  <li>
  <h5>{capitalize(props.children)}</h5>
  <p></p>
  <PostDetail postData={props.postData} userData={props.userData}/>
  </li>
)


}

export default Post
