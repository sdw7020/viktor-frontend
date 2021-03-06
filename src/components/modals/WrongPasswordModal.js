import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'

const WrongPasswordModal = ({ hideModal }) => (
  <Modal isOpen={true}>
    <ModalHeader>Error</ModalHeader>
    <ModalBody>Wrong password.</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={hideModal}>
        OK
      </Button>
    </ModalFooter>
  </Modal>
)

const mapDispatchToProps = dispatch => ({
  hideModal: () =>
    dispatch({
      type: 'HIDE_MODAL',
    }),
})

export default connect(undefined, mapDispatchToProps)(WrongPasswordModal)
