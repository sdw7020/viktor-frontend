import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

const AddUser = ({ addUser }) => (
  <Form>
    <h1 className="h1">Add User</h1>
    <FormGroup>
      <Label>Username</Label>
      <Input id="username-add-input" type="name" placeholder="johndoe" />
    </FormGroup>
    <FormGroup>
      <table id="timeTable">
        <tbody>
          <tr>
            <td>
              <Label for="exampleTime">Start Time</Label>
              <Input id="start-time-input" type="time" name="startTime" placeholder="" />
            </td>
            <td>
              <Label for="exampleTime">End Time</Label>
              <Input id="end-time-input" type="time" name="endTime" placeholder="" />
            </td>
          </tr>
        </tbody>
      </table>
    </FormGroup>
    <FormGroup>
      <Button
        onClick={() => {
          const username = document.getElementById('username-add-input').value
          const startTimeVal = document.getElementById('start-time-input').value.split(':')
          const endTimeVal = document.getElementById('end-time-input').value.split(':')

          const startTime = startTimeVal[0] * 60 * 60 * 1000 + startTimeVal[1] * 60 * 1000
          const endTime = endTimeVal[0] * 60 * 60 * 1000 + endTimeVal[1] * 60 * 1000

          addUser(username, startTime, endTime)
        }}
        color="primary"
        className="addButton"
      >
        Add User
      </Button>
    </FormGroup>
  </Form>
)

const mapDispatchToProps = dispatch => ({
  addUser: (username, startTime, endTime) =>
    dispatch({
      type: 'ADD_USER',
      username,
      startTime,
      endTime,
    }),
})

export default connect(undefined, mapDispatchToProps)(AddUser)
