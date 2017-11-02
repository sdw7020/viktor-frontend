import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import jsCookie from 'js-cookie'

const Settings = ({ changePassword, restartScanner }) => (
  <div id="settingsContainer">
    <h1 className="h1">Settings</h1>
    <FormGroup>
      <Label>Change admin password.</Label>
    </FormGroup>
    <FormGroup>
      <Input id="changePasswordInput1" className="changePasswordInput" type="password" placeholder="Old Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Input id="changePasswordInput2" className="changePasswordInput" type="password" placeholder="New Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Button
        onClick={() => {
          const oldPassword = document.getElementById('changePasswordInput1').value
          const newPassword = document.getElementById('changePasswordInput2').value

          if (oldPassword === jsCookie.get('password')) {
            changePassword(newPassword)
          } else {
            console.log('old:', oldPassword)
            console.log('cookiepass:', jsCookie.get('password'))
            console.error("Passwords don't match")
          }
        }}
        color="primary"
        className="addButton"
      >
        Change password
      </Button>
    </FormGroup>

    <br />
    <hr />
    <h1 className="h1">Restart scanner</h1>
    <FormGroup>
      <Label>Restart the scanner if it happens to get stuck.</Label>
    </FormGroup>
    <FormGroup>
      <Button onClick={restartScanner} color="warning">
        Restart
      </Button>
    </FormGroup>
    <br />
    <hr />
  </div>
)

const mapDispatchToProps = dispatch => ({
  changePassword: newPassword =>
    dispatch({
      type: 'CHANGE_PASSWORD',
      newPassword,
    }),
  restartScanner: () =>
    dispatch({
      type: 'RESTART_SCANNER',
    }),
})

export default connect(undefined, mapDispatchToProps)(Settings)
