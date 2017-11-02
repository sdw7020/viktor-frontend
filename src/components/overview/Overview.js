import React from 'react'
import UserTable from './UserTable'
import AddUser from './AddUser'
import AddPass from './AddPass'

export default () => (
  <div id="overview">
    <div id="mainPanel">
      <UserTable />
    </div>
    <div id="sidePanel">
      <AddUser />
      <hr />
      <AddPass />
    </div>
  </div>
)
