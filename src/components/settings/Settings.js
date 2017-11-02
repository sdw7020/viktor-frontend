import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

const Settings = ({ changePassword }) => (
  <div id="settingsContainer">
    <h1 className="h1">Settings</h1>

    <FormGroup>
      <Label>Change admin password.</Label>
    </FormGroup>
    <FormGroup>
      <Input id="changePasswordInput1" type="password" placeholder="Old Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Input id="changePasswordInput2" type="password" placeholder="New Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Button
        // onClick={() => {
        //   const oldPassword = document.getElementById('changePasswordInput1')
        //   const newPassword = document.getElementById('changePasswordInput2')
        //
        //   if ()
        // }}
        color="primary"
        className="addButton"
      >
        Change password
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
})

export default connect(undefined, mapDispatchToProps)(Settings)
