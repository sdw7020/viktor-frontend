import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="add" color="success">
          +
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Scan pass</ModalHeader>
          <ModalBody>Scan the pass within 10 seconds.</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
