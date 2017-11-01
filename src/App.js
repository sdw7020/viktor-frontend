import React, { Component } from 'react'
import logo from './viktorlogo.png'
import './App.css'
import { Input, Button } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">viktor Admin Panel</h1>
        </header>
        <br />
        <br />
        <p className="App-intro">Welcome to the viktor Admin Panel!</p>
        <br />
        <br />
        <br />
        <br />

        <div id="loginForm">
          <Input id="input" type="password" autoFocus /><br />
          <Button class="login">Log in</Button>
        </div>
      </div>
    )
  }
}

export default App
