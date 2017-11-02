import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'

const GenericModal = ({ hideModal, text, header }) => (
  <Modal isOpen={true}>
    <ModalHeader>{header}</ModalHeader>
    <ModalBody>{text}</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={hideModal}>
        OK
      </Button>
    </ModalFooter>
  </Modal>
)

const mapStateToProps = state => ({
  text: state.modal.text,
  header: state.modal.header,
})

const mapDispatchToProps = dispatch => ({
  hideModal: () =>
    dispatch({
      type: 'HIDE_MODAL',
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GenericModal)
