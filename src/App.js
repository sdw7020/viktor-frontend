import React, { Component } from 'react'
import logo from './viktorlogo.png'
import './App.css'
import { Input, Button } from 'reactstrap'

import LoginScreen from './components/login/LoginScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">made by Group 22</h1>
        </header>
        <br />
        <br />
        <p className="App-intro">Welcome to the viktor Admin Panel!</p>
        <br />
        <br />
        <br />
        <br />

        <LoginScreen />
      </div>
    )
  }
}

export default App
