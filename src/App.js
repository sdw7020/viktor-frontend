import React, { Component } from 'react'
import logo from './viktorlogo.png'
import './App.css'
import { Button } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">viktor Admin Panel</h1>
        </header>
        <p className="App-intro">Welcome to the viktor Admin Panel!</p>
        <br />
        <br />
        <br />
        <br />

        <input class="login" type="password" autoFocus />
        <Button class="login">Log in</Button>
      </div>
    )
  }
}

export default App
