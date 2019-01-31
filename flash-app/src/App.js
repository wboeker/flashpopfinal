import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.jsx'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-128940867-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Card/>
      </div>
    );
  }
}

export default App;
