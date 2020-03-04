import React from 'react'
import CommentBox from '../containers/CommentBox'


const PostDetail = (props) => {

if(!props.postData || !props.userData) return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;


const capitalize = require('../helpers/capitalize')

// function userById(){
//   return props.userData.find(props.userData.id => props.userData.id === props.postData.userId)
// }

// const user = props.userData()
// console.log(user);
return(
  <div className="post-detail" >
    <h6>User: {props.userData.username} </h6>
    <p>{capitalize(props.postData.body)}</p>
    <CommentBox postId={props.postData.id}/>
  </div>
)


}

export default PostDetail
