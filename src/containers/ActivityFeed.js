import React, {Component} from 'react'
import FeedList from '../components/FeedList'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedData: [],
      currentPage: 1,
      postsPerPage: 50
    }
  }


  componentDidMount(){
    console.log('did mount');
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({feedData: data}))
    .catch(err => console.error)
  }





  render(){
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    const indexOfFirstPost = this.state.indexOfLastPost - this.state.postsPerPage
    const currentPosts = this.state.feedData.slice(indexOfFirstPost, indexOfLastPost)

    return(
      <div>
      <FeedList data={currentPosts}/>
      </div>
    )
  }


}

export default ActivityFeed
