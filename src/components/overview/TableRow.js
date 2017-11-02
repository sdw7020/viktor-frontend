import React from 'react'
import DeleteUserButton from './DeleteUserButton'
import AddPassButton from './AddPassButton'
import { connect } from 'react-redux'

const convertToNiceTime = ms => {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(seconds / 60 / 60)

  const finalMinutes = minutes % 60

  return `${hours}:${finalMinutes}`
}

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
    <td>{convertToNiceTime(startTime)}</td>
    <td>{convertToNiceTime(endTime)}</td>
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
