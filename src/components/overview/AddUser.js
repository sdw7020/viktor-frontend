import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

const AddUser = ({ addUser }) => (
  <Form>
    <h1 className="h1">Add User</h1>
    <FormGroup>
      <Label>Username</Label>
      <Input id="username-add-input" type="name" placeholder="johndoe (max. 32 characters)" maxLength="32" />
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

          if (!startTimeVal[0]) {
            startTimeVal[0] = '00'
          }

          if (!startTimeVal[1]) {
            startTimeVal[1] = '00'
          }

          if (!endTimeVal[0]) {
            endTimeVal[0] = '00'
          }

          if (!endTimeVal[1]) {
            endTimeVal[1] = '00'
          }

          const startTime = startTimeVal[0] * 60 * 60 * 1000 + startTimeVal[1] * 60 * 1000
          let endTime = endTimeVal[0] * 60 * 60 * 1000 + endTimeVal[1] * 60 * 1000

          if (startTime === 0 && endTime === 0) {
            endTime = 86400000
          }
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
