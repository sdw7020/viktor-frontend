import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'

const DeleteUserModal = ({ isVisible, username, deleteUser, hideModal }) => (
  <Modal isOpen={isVisible}>
    <ModalHeader>Delete user?</ModalHeader>
    <ModalBody>Are you sure you want to delete {username}?</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={hideModal}>
        Cancel
      </Button>
      <Button color="danger" onClick={() => deleteUser(username)}>
        Delete
      </Button>
    </ModalFooter>
  </Modal>
)

const mapStateToProps = state => ({
  isVisible: state.modals.deleteUser,
  username: state.modals.deleteUserUsername,
})

const mapDispatchToProps = dispatch => ({
  deleteUser: username =>
    dispatch({
      type: 'DELETE_USER',
      username,
    }),
  hideModal: () =>
    dispatch({
      type: 'HIDE_MODAL',
      modal: 'deleteUser',
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserModal)
