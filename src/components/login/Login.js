import React from "react"
import { Input, Button } from "reactstrap"

export default class Login extends React.component {
  constructor() {
    super()

    this.arrangeLogin = this.arrangeLogin.bind(this)
  }
  render({ login }) {
    return (
      <div id="loginForm">
        <Input id="password-input" type="password" placeholder="Password" autoFocus />
        <br />
        <Button onlick={() => this.arrangeLogin(login)} id="loginButton">
          Log in
        </Button>
      </div>
    )
  }

  arrangeLogin(fn) {
    const password = document.getElementById('password-input').value

    fn(value)
  }
}
