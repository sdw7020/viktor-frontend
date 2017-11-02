import React from "react"
import logo from "../viktorlogo.png"
import { Button } from "reactstrap"

export default () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">made by Group 22</h1>

    <div id="menuBar">
      <Button className="menuButtons">Settings</Button>
      <Button color="danger" className="menuButtons">
        Log out
      </Button>
    </div>
  </header>
)
