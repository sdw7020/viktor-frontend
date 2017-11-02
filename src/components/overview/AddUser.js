import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default () => (
  <Form>
    <h1 className="h1">Add User</h1>
    <FormGroup>
      <Label for="exampleEmail">Username</Label>
      <Input type="name" name="name" placeholder="John Doe" />
    </FormGroup>
    <FormGroup>
      <table id="timeTable">
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
      </table>
    </FormGroup>
    <FormGroup>
      <Button color="primary" className="addButton">
        Add User
      </Button>
    </FormGroup>
  </Form>
)
