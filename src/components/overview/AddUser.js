import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default () => (
  <Form>
    <h1 className="h1">Add User</h1>
    <FormGroup>
      <Label>Username</Label>
      <Input type="name" placeholder="johndoe" />
    </FormGroup>
    <FormGroup>
      <table id="timeTable">
        <tbody>
          <tr>
            <td>
              <Label for="exampleTime">Start Time</Label>
              <Input type="time" name="startTime" placeholder="" />
            </td>
            <td>
              <Label for="exampleTime">End Time</Label>
              <Input type="time" name="endTime" placeholder="" />
            </td>
          </tr>
        </tbody>
      </table>
    </FormGroup>
    <FormGroup>
      <Button onClick={() => {}} color="primary" className="addButton">
        Add User
      </Button>
    </FormGroup>
  </Form>
)
