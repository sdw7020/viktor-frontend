import React from "react"
import { Table } from "reactstrap"

import DeleteButton from "./DeleteButton"
import AddButton from "./AddButton"

export default class extends React.Component {
  constructor(props, test) {
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
            <th>Username</th>
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
            <td className="user">jimd</td>
            <td>1234567890, 1234567891</td>
            <td />
            <td />
          </tr>
        </tbody>
      </Table>
    )
  }
}
