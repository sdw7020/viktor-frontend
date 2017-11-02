import React from "react"
import Login from "./Login"

import WrongPassword from "./WrongPassword"

export default ({ WrongPassword }) => (
  <div id="loginForm">
    <Login />
    {WrongPassword ? <WrongPassword /> : undefined}
  </div>
)
