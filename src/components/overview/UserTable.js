import React from "react"
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, Popover, PopoverHeader, PopoverBody } from "reactstrap"

import DeleteButton from "./DeleteButton"
import AddButton from "./AddButton"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.delete = this.delete.bind(this)
  }

  delete() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  add() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  render() {
    return (
      <Table id="userTable">
        <thead>
          <tr>
            <th />
            <th />
            <th>UserID</th>
            <th>Name</th>
            <th>PassID</th>
            <th>Start time</th>
            <th>End time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableButton">
              <DeleteButton />
            </td>
            <td className="tableButton">
              <AddButton />
            </td>
            <td>110ec58a-a0f2-4ac4-8393-c866d813b8d1</td>
            <td>jimd</td>
            <td>1234567890, 1234567891</td>
            <td />
            <td />
          </tr>
        </tbody>
      </Table>
    )
  }
}
