import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from './Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO List</h2>
        </div>
        <Todo/>
      </div>
    );
  }
}

export default App;
