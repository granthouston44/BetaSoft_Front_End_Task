import React from 'react'
import Post from './Post'

const FeedList = (props) => {

if(!props.Data) return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;

function handleClick(event){
  console.log('handle click');
    console.log(event.target);
    props.onPostSelected(event.target.innerText);
}

const postNodes = props.postData.map((post) => {
return(
  <ul key={post.id} onClick={handleClick.bind(this)}>
    <hr/>
    <Post post={post}  >{post.title}</Post>
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
