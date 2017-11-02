import React from 'react'
import UserTable from './UserTable'
import AddUser from './AddUser'
import DeleteUserModal from './DeleteUserModal'
import AddPassModal from './AddPassModal'

export default () => (
  <div id="overview">
    <div id="mainPanel">
      <UserTable />
    </div>
    <div id="sidePanel">
      <AddUser />
      <hr />
    </div>
    <DeleteUserModal />
    />
    <AddPassModal />
  </div>
)
