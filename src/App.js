import React from 'react';
import './App.css';
import ActivityFeed from './containers/ActivityFeed'

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="beta-banner">Beta</div> <div className="blog-banner">Blog!</div>
      </div>
      <ActivityFeed />
    </div>
  );
}

export default App;
