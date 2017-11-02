import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import { connect } from "react-redux"

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

const mapStateToProps = state => ({
  username: state.modal.username,
})

const mapDispatchToProps = dispatch => ({
  deleteUser: username =>
    dispatch({
      type: "DELETE_USER",
      username,
    }),
  hideModal: () =>
    dispatch({
      type: "HIDE_MODAL",
      modal: "deleteUser",
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(WrongPasswordModal)
