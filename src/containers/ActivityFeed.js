import React, {Component} from 'react'
import FeedList from '../components/FeedList'
import Pagination from '../components/Pagination'
import Request from '../helpers/Request'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedData: [],
      selectedPost: "",
      commentData: [],
      currentPage: 1,
      postsPerPage: 50
    }
    this.paginate = this.paginate.bind(this)
    this.handleSelectedPost = this.handleSelectedPost.bind(this)
  }


  componentDidMount(){

    const postURL = 'https://jsonplaceholder.typicode.com/posts'
    const request = new Request();
    request.get(postURL)
    .then(data => this.setState({feedData: data}))
    .catch(err => console.error)
  }

  handleSelectedPost(postTitle){
    console.log('selected Post');
    this.setState({selectedPost: postTitle})
  }

  paginate(pageNumber){
    //set currentPageNumber
    this.setState({currentPage: pageNumber})
  }


  render(){
    const selectedPost = this.state.feedData.find(post => {
      return post.title === this.state.selectedPost;
    })
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    // console.log(indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
    // console.log(indexOfFirstPost);
    const currentPosts = this.state.feedData.slice(indexOfFirstPost, indexOfLastPost)

    return(
      <div>
      <FeedList selectedPost={selectedPost} onPostSelected={this.handleSelectedPost} data={currentPosts}/>
      <Pagination paginate={this.paginate} postsPerPage={this.state.postsPerPage} totalPosts={this.state.feedData.length} />
      </div>
    )
  }


}

export default ActivityFeed
