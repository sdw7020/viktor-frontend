import React from 'react'
import DeleteUserButton from './DeleteUserButton'
import AddPassButton from './AddPassButton'
import { connect } from 'react-redux'

const convertToNiceTime = ms => {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(seconds / 60 / 60)

  const finalMinutes = minutes % 60

  return `${hours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`
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
      {passIDs.map(id => {
        return (
          <p title="Delete this pass" className="pass-id" key={id} onClick={() => removePass(username, id)}>
            {id}
          </p>
        )
      })}
    </td>
    <td>{convertToNiceTime(startTime)}</td>
    <td>{convertToNiceTime(endTime)}</td>
  </tr>
)

const mapDispatchToProps = dispatch => ({
  removePass: (username, pass) =>
    dispatch({
      type: 'REMOVE_PASS',
      username,
      pass,
    }),
})

export default connect(undefined, mapDispatchToProps)(TableRow)
