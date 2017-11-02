import React from 'react'
import DeleteUserButton from './DeleteUserButton'
import AddPassButton from './AddPassButton'
import { connect } from 'react-redux'

const TableRow = ({ username, passIDs, startTime, endTime, removePass }) => (
  <tr>
    <td className="tableButton">
      <DeleteUserButton username={username} />
    </td>
    <td className="tableButton">
      <AddPassButton username={username} />
    </td>
    <td className="user">{username}</td>
    <td>
      {passIDs.map(id => (
        <p className="pass-id" key={id} onClick={() => removePass(username, id)}>
          {id}
        </p>
      ))}
    </td>
    <td>{startTime}</td>
    <td>{endTime}</td>
  </tr>
)

const mapDispatchToProps = dispatch => ({
  removePass: (username, id) =>
    dispatch({
      type: 'REMOVE_PASS',
      username,
      id,
    }),
})

export default connect(undefined, mapDispatchToProps)(TableRow)
