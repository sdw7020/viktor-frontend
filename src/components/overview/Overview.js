import React from 'react'
import UserTable from './UserTable'
import AddUser from './AddUser'

export default () => (
  <div id="overview">
    <div id="mainPanel">
      <UserTable />
    </div>
    <div id="sidePanel">
      <AddUser />
      <br />
      <hr />
    </div>
  </div>
)
