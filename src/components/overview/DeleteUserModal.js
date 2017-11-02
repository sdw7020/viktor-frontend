import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'

const DeleteUserModal = ({ isVisible, confirm, cancel }) => (
  <Modal isOpen={isVisible}>
    <ModalHeader>Delete user?</ModalHeader>
    <ModalBody>Are you sure you want to delete this user?</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={cancel}>
        Cancel
      </Button>
      <Button color="danger" onClick={confirm}>
        Delete
      </Button>
    </ModalFooter>
  </Modal>
)

const mapStateToProps = state => ({
  isVisible: state.modals.deleteUser,
})

export default connect(mapStateToProps)(DeleteUserModal)
