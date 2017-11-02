import React from 'react'
import { Label, Input, Button } from 'reactstrap'

export default () => (
  <div id="loginForm">
    <Input id="input" type="password" placeholder="Password" autoFocus /><br />
    <Button id="loginButton">Log in</Button>
  </div>
)
