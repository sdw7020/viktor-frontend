import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../style.css'

export default () => (
  <Form>
    <h1 className="h1">Add User</h1>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="hunter2" />
        </FormGroup>
        <FormGroup>
          <table id="timeTable">
            <tr>
              <td>
                <Label for="exampleTime">Start Time</Label>
                <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
              </td>
              <td>
                <Label for="exampleTime">End Time</Label>
                <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
              </td>
            </tr>
          </table>
        </FormGroup>
        <FormGroup>
          <Button color="primary" className="addButton">Add User</Button>
        </FormGroup>
      </Form>
)
