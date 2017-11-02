import React from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

export default () => (
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
