import React from "react"
import { Input, Button } from "reactstrap"
import { connect } from "react-redux"

const Login = ({ login }) => {
  return (
    <div id="loginForm">
      <Input id="password-input" type="password" placeholder="Password" autoFocus />
      <br />
      <Button
        color="primary"
        onClick={() => {
          const password = document.getElementById("password-input").value
          login(password)
        }}
        id="loginButton"
      >
        Log in
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  login: password =>
    dispatch({
      type: "LOGIN",
      password,
    }),
})

export default connect(undefined, mapDispatchToProps)(Login)
