import React, {Component} from 'react'
import FeedList from '../components/FeedList'
import Pagination from '../components/Pagination'
import Request from '../helpers/Request'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      postData: [],
      userData: [],
      selectedPost: "",
      commentData: [],
      currentPage: 1,
      postsPerPage: 5
    }
    this.paginate = this.paginate.bind(this)
    this.handleSelectedPost = this.handleSelectedPost.bind(this)
    this.fetchPosts = this.fetchPosts.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
  }


  componentWillMount(){
    this.fetchPosts()
    this.fetchUsers()

  }



  fetchUsers = () => {
    const userURL = 'https://jsonplaceholder.typicode.com/users'
    const request = new Request();
    request.get(userURL)
    .then(data => this.setState({userData: data}))
    .catch(err => console.error)
  }

  fetchPosts = () => {
    const postURL = 'https://jsonplaceholder.typicode.com/posts'
    const request = new Request();
    request.get(postURL)
    .then(data => data.slice(0, 50))
    .then(data => this.setState({postData: data}))
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
    if(!this.state.postData.length || !this.state.userData)
    return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;

    const selectedPost = this.state.postData.find(post => {
      return post.title === this.state.selectedPost;
    })
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    // console.log(indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
    // console.log(indexOfFirstPost);
    const currentPosts = this.state.postData.slice(indexOfFirstPost, indexOfLastPost)

    return(
      <div>
      <FeedList selectedPost={selectedPost} onPostSelected={this.handleSelectedPost} postData={currentPosts} userData={this.state.userData}/>
      <Pagination paginate={this.paginate} postsPerPage={this.state.postsPerPage} totalPosts={this.state.postData.length} />
      </div>
    )
  }


}

export default ActivityFeed
