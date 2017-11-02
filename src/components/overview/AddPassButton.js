import React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const AddPassButton = ({ addPass, username }) => (
  <div>
    <Button onClick={() => addPass(username)} className="add" color="success">
      +
    </Button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  addPass: username => {
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        name: 'GENERIC',
        header: 'Scan pass',
        text: 'Please scan a pass within 10 seconds.',
        username,
      },
    })
    dispatch({
      type: 'ADD_PASS',
    })
  },
})

export default connect(undefined, mapDispatchToProps)(AddPassButton)
