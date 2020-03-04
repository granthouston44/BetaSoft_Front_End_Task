import React from 'react'
import CommentBox from '../containers/CommentBox'

const PostDetail = (props) => {
const capitalize = require('../helpers/capitalize')

// function userById(){
//   return props.userData.find(props.userData.id => props.userData.id === props.postData.userId)
// }



console.log(props.userData.username)
return(
  <div className="post-detail" >
    <p>User:  </p>
    <p>{capitalize(props.postData.body)}</p>

    <CommentBox postId={props.postData.id}/>
  </div>
)


}

export default PostDetail
