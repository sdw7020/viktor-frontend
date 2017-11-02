import React from 'react'
import { Button } from 'reactstrap'
import AddPassModal from './AddPassModal'
import { connect } from 'react-redux'

const AddPassButton = ({ username, showModal }) => (
  <div>
    <Button onClick={showModal} className="add" color="success">
      +
    </Button>
    <AddPassModal />
  </div>
)

const mapDispatchToProps = dispatch => ({
  showModal: () =>
    dispatch({
      type: 'SHOW_MODAL',
      modal: 'addPass',
    }),
})

export default connect(undefined, mapDispatchToProps)(AddPassButton)
