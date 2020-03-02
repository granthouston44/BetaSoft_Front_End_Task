import React, {Component} from 'react'
import Post from './Post'

const FeedList = (props) => {

if(!props.data) return <h2>Loading data...</h2>;

function handleClick(event){
  console.log('handle click');
    console.log(event.target);
    props.onPostSelected(event.target.innerText);
}

const postNodes = props.data.map((post, index) => {
return(
  <ul key={index} onClick={handleClick.bind(this)}>
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
