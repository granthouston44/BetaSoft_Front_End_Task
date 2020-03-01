import React, {Component} from 'react'
import FeedList from '../components/FeedList'
import Pagination from '../components/Pagination'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedData: [],
      currentPage: 1,
      postsPerPage: 50
    }
    this.paginate = this.paginate.bind(this)
  }


  componentDidMount(){
    console.log('did mount');
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({feedData: data}))
    .catch(err => console.error)
  }


paginate(pageNumber){
  //set currentPageNumber
    this.setState({currentPage: pageNumber})
}


  render(){
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    // console.log(indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
    // console.log(indexOfFirstPost);
    const currentPosts = this.state.feedData.slice(indexOfFirstPost, indexOfLastPost)

    return(
      <div>
      <FeedList data={currentPosts}/>
      <Pagination paginate={this.paginate} postsPerPage={this.state.postsPerPage} totalPosts={this.state.feedData.length} />
      </div>
    )
  }


}

export default ActivityFeed
