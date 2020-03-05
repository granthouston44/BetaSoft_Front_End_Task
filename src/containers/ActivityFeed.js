import React, {Component} from 'react'
import FeedList from '../components/FeedList'
import Pagination from '../components/Pagination'
import Request from '../helpers/Request'
import Search from './Search'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      postData: [],
      userData: [],
      commentData: [],
      currentPage: 1,
      postsPerPage: 5,
      search: ''
    }
    this.paginate = this.paginate.bind(this)
    this.fetchPosts = this.fetchPosts.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
  }


  componentDidMount(){
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

  paginate(pageNumber){
    //set currentPageNumber
    this.setState({currentPage: pageNumber})
  }

  handleUpdateSearch(userString){
  this.setState({search: userString})
  }


  render(){
    if(!this.state.postData.length || !this.state.userData)
    return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;


    let filteredUsers = this.state.userData.filter(
      (user) => {
        return user.username.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1
      }
    )

    let filteredPosts = this.state.postData.filter(
      (post) => {
        if(filteredUsers.length > 1 ){
          return post
        }
        if(filteredUsers.length === 1 && post.userId === filteredUsers[0].id){
        return post
      }
    }
    )


    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    if(!filteredPosts.length || !filteredUsers)
    return <div className="lds-facebook">Loading...<div></div><div></div><div></div></div>;


    return(
      <div>
      <Search users={filteredUsers} handleUpdate={this.handleUpdateSearch}/>
      <FeedList postData={currentPosts} userData={filteredUsers}/>
      <Pagination paginate={this.paginate} postsPerPage={this.state.postsPerPage} totalPosts={filteredPosts.length} />
      </div>
    )
  }


}

export default ActivityFeed
