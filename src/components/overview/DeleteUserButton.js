import React from 'react'

import { Button } from 'reactstrap'
import DeleteUserModal from './DeleteUserModal'
import { connect } from 'react-redux'

const DeleteUserButton = ({ username, deleteUser, hideModal, showModal }) => (
  <div>
    <Button onClick={showModal} className="delete" color="danger">
      ×
    </Button>
    <DeleteUserModal confirm={() => deleteUser(username)} cancel={hideModal} />
  </div>
)

const mapDispatchToProps = dispatch => ({
  deleteUser: username =>
    dispatch({
      type: 'DELETE_USER',
      username,
    }),
  showModal: () =>
    dispatch({
      type: 'SHOW_MODAL',
      modal: 'deleteUser',
    }),
  hideModal: () =>
    dispatch({
      type: 'HIDE_MODAL',
      modal: 'deleteUser',
    }),
})

export default connect(undefined, mapDispatchToProps)(DeleteUserButton)
