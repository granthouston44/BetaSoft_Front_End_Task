import React, {Component} from 'react'
import Post from './Post'

const FeedList = (props) => {

if(!props.data) return <h2>Loading data...</h2>;

const postNodes = props.data.map((post, index) => {
return(
  <ul>
    <Post key={index} post={post}/>
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
