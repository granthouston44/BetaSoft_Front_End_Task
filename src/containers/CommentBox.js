import React, {Component} from 'react'
import Request from '../helpers/Request'
import CommentList from '../components/CommentList'

class CommentBox extends Component{
constructor(props){
  super(props)
  this.state = {
    commentData: [],
    commentBox: false
  }
  this.handleToggleComments = this.handleToggleComments.bind(this)
  this.fetchComments = this.fetchComments.bind(this)
}


fetchComments(){
  this.handleToggleComments()

  const request = new Request();
  const commentURL = 'https://jsonplaceholder.typicode.com/comments?postId=' + this.props.postId
  request.get(commentURL)
  .then(data => this.setState({commentData: data}))
  .catch(err => console.error)
}

handleToggleComments(){
    this.setState(state => ({
      commentBox: !state.commentBox
    }))
  }

  render(){
      return(
        <div className="comment-box">
          <button className="btn-comment" onClick={this.fetchComments}> Show/Hide Comments </button>
          <CommentList commentToggle={this.state.commentBox} commentData={this.state.commentData}/>
        </div>
      )
    }

}

export default CommentBox
