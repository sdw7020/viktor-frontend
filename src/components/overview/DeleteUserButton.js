import React from 'react'

import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const DeleteUserButton = ({ username, showModal }) => (
  <div>
    <Button onClick={() => showModal(username)} className="delete" color="danger">
      ×
    </Button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  showModal: username =>
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        name: 'DELETE_USER',
        username,
      },
    }),
})

export default connect(undefined, mapDispatchToProps)(DeleteUserButton)
