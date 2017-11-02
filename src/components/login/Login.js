import React from 'react'
import { Input, Button } from 'reactstrap'

export default ({ login }) => {
  return (
    <div id="loginForm">
      <Input id="password-input" type="password" placeholder="Password" autoFocus />
      <br />
      <Button
        onClick={() => {
          const password = document.getElementById('password-input').value
          login(password)
        }}
        id="loginButton"
      >
        Log in
      </Button>
    </div>
  )
}
