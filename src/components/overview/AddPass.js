import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../style.css'

export default () => (
  <Form>
    <h1 className="h1" id="addPassTitle">Add Pass</h1>
    <FormGroup>
      <Label for="exampleEmail">User ID</Label>
      <Input type="id" name="userID" placeholder="110ec58a-a0f2-4ac4-8393-c866d813b8d1" />
    </FormGroup>
    <FormGroup>
      <Button color="primary" className="addButton">Add Pass</Button>
    </FormGroup>
  </Form>
)
