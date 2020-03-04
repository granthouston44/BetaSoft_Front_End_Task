import React from 'react'
import Post from './Post'

const FeedList = (props) => {

if(!props.postData) return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;

function handleClick(event){
  console.log('handle click');
    console.log(event.target);
    props.onPostSelected(event.target.innerText);
}


// function userById(){
// let userObject = props.userData.find(user => user.id === props.postData.userId)
// return userObject
// }
//
// let user = userById()
const postNodes = props.postData.map((post) => {


return(
  <ul key={post.id} onClick={handleClick.bind(this)}>
    <hr/>
    <Post postData={post} userData={props.userData.find(user => user.id === post.userId)} >{post.title}</Post>
  </ul>
)
})




  return(
    <div>
      {postNodes}
    </div>
  )


}
export default FeedList
