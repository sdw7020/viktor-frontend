import React from 'react'
import { Table } from 'reactstrap'

import TableRow from './TableRow'
import { connect } from 'react-redux'

const UserTable = ({ entries }) => (
  <Table id="userTable">
    <thead>
      <tr>
        <th />
        <th />
        <th>
          Username<hr />
        </th>
        <th>
          PassID<hr />
        </th>
        <th>
          Start time<hr />
        </th>
        <th>
          End time<hr />
        </th>
      </tr>
    </thead>
    <tbody>
      {entries.map(entry => (
        <TableRow
          username={entry.username}
          passIDs={entry.passIDs}
          startTime={entry.startTime}
          endTime={entry.endTime}
          key={entry.username}
        />
      ))}
    </tbody>
  </Table>
)

const mapStateToProps = state => ({
  entries: state.entries,
})

export default connect(mapStateToProps)(UserTable)
