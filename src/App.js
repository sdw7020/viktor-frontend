import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import Header from './components/Header'
import LoginScreen from './components/login/LoginScreen'
import Overview from './components/overview/Overview'
import Settings from './components/settings/Settings'

import AddPassModal from './components/modals/AddPassModal'
import DeleteUserModal from './components/modals/DeleteUserModal'
import WrongPasswordModal from './components/modals/WrongPasswordModal'

const App = ({ page, modal }) => (
  <div className="App">
    <Header />
    <div id="container">
      {page === 'login' ? <LoginScreen /> : page === 'overview' ? <Overview /> : page === 'settings' ? <Settings /> : <p> unknown page </p>}
      {modal === 'DELETE_USER' ? (
        <DeleteUserModal />
      ) : modal === 'ADD_PASS' ? (
        <AddPassModal />
      ) : modal === 'WRONG_PASSWORD' ? (
        <WrongPasswordModal />
      ) : null}
    </div>
  </div>
)

const mapStateToProps = state => ({
  page: state.page,
  modal: state.modal && state.modal.name,
})

export default connect(mapStateToProps)(App)
