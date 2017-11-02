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
      <Input id="changePasswordInput" type="password" placeholder="Old Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Input id="changePasswordInput" type="password" placeholder="New Password" autoFocus />
    </FormGroup>
    <FormGroup>
      <Button color="primary" className="addButton">
        Change password
      </Button>
    </FormGroup>

    <br />
    <hr />
    <Button color="secondary">Back</Button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  changePassword: newPassword =>
    dispatch({
      type: 'CHANGE_PASSWORD',
      newPassword,
    }),
})

export default connect()(Settings)
