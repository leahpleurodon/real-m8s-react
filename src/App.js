import React, { Component } from 'react';
import './resources/landing.css'
import './resources/landing-mobile.css'
import Landing from './Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
