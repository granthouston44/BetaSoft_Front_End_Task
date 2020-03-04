import React from 'react'
import Post from './Post'

const FeedList = (props) => {

if(!props.userData || !props.postData) return <div className="animation-bars">Loading...<div className="lds-facebook"><div></div><div></div><div></div></div></div>


function userById(){
return props.userData.find(user => user.id === props.postData[0].userId)
}
const user = userById()

const postNodes = props.postData.map((post) => {


return(
  <ul key={post.id}>
    <hr/>
    <Post postData={post} userData={user} >{post.title}</Post>
    <p></p>
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
