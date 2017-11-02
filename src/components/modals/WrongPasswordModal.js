import React from "react"
import { UncontrolledAlert } from "reactstrap"

export default () => (
  <UncontrolledAlert className="wrongPassword" color="danger">
    Wrong password.
  </UncontrolledAlert>
)
