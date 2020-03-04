import React from 'react';
import './App.css';
import ActivityFeed from './containers/ActivityFeed'

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>BetaBlog!</h1>
      </div>
      <ActivityFeed />
    </div>
  );
}

export default App;
