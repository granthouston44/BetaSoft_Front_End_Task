import React, {Component} from 'react'
import FeedList from '../components/FeedList'

class ActivityFeed extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedData: []
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
  return(
    <div>
      <FeedList data={this.state.feedData}/>
    </div>
  )
}


}

export default ActivityFeed
