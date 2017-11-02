import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

import AddPassButton from "./AddPassButton"

export default () => (
  <Form>
    <h1 className="h1" id="addPassTitle">
      Add Pass
    </h1>
    <FormGroup>
      <Label>Username</Label>
      <Input type="id" name="name" placeholder="johndoe" />
    </FormGroup>
    <FormGroup>
      <AddPassButton />
    </FormGroup>
  </Form>
)
