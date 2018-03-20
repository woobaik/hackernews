import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let message = "리액트를 시작해보자"
    let user = {
      firstName: "Joungwoo",
      lastName: "Baik"
    }
    return (
      <div className="App">
        <h2>{message + " " + user.firstName + " " + user.lastName}</h2>
      </div>
    );
  }
}

export default App;
