import React, { Component } from 'react'
import { Input, Button } from 'reactstrap'

export default () => (
  <div id="loginForm">
    <Input id="input" type="password" autoFocus /><br />
    <Button id="loginButton">Log in</Button>
  </div>
)
