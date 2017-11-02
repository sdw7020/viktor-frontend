import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { connect } from 'react-redux'

const AddPassModal = ({ isVisible }) => (
  <Modal isOpen={isVisible}>
    <ModalHeader>Scan pass</ModalHeader>
    <ModalBody>Scan the pass within 10 seconds.</ModalBody>
  </Modal>
)

const mapStateToProps = state => ({
  isVisible: state.modals.addPass,
})

export default connect(mapStateToProps)(AddPassModal)
