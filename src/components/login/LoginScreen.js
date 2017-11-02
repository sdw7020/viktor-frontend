import React from 'react'
import Login from './LoginContainer'

import WrongPassword from './WrongPassword'

export default ({ ShowWrongPasswordPopup }) => (
  <div id="loginForm">
    <Login />
    {ShowWrongPasswordPopup ? <WrongPassword /> : undefined}
  </div>
)
