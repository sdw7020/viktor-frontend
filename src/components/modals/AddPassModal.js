import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { connect } from 'react-redux'

const AddPassModal = ({ username }) => (
  <Modal isOpen={true}>
    <ModalHeader>Scan pass</ModalHeader>
    <ModalBody>Scan the pass within 10 seconds.</ModalBody>
    <br />
    <hr />
  </Modal>
)

const mapStateToProps = state => ({
  username: state.modal.username,
})

export default connect(mapStateToProps)(AddPassModal)
