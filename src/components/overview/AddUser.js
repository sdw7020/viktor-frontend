import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

export default () => (
  <Form>
    <h1 className="h1">Add User</h1>
    <FormGroup>
      <Label>Username</Label>
      <Input type="name" placeholder="johndoe" />
    </FormGroup>
    <FormGroup>
      <table id="timeTable">
        <tr>
          <td>
            <Label for="exampleTime">Start Time</Label>
            <Input type="time" placeholder="" />
          </td>
          <td>
            <Label for="exampleTime">End Time</Label>
            <Input type="time" placeholder="" />
          </td>
        </tr>
      </table>
    </FormGroup>
    <FormGroup>
      <Button color="primary" className="addButton">
        Add User
      </Button>
    </FormGroup>
  </Form>
)
