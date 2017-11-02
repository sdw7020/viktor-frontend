import React from "react"
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap"

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false,
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle} className="add" color="success">
          +
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.add}>
          <PopoverHeader>Scan</PopoverHeader>
          <PopoverBody>Scan your new pass in 10 seconds.</PopoverBody>
        </Popover>
      </div>
    )
  }
}
