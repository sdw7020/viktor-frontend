import React from "react"
import logo from "./viktorlogo.png"
import "./App.css"

// SWAP THE PATH OF THE LINE BELOW TO ./components/login/LoginScreen TO VIEW
// THE LOGIN SCREEN.
import ComponentTest from "./components/login/LoginScreen"

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">made by Group 22</h1>
    </header>
    <div id="container">
      <ComponentTest />
    </div>
  </div>
)
