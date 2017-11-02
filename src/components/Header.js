import React from 'react'
import logo from '../viktorlogo.png'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const Header = ({ logout, navigate, isSettingsPage, isLoginPage }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">made by Group 22</h1>

    <div id="menuBar">
      {isLoginPage ? null : (
        <Button onClick={() => navigate(isSettingsPage ? 'overview' : 'settings')} className="menuButtons">
          {isSettingsPage ? 'Back' : 'Settings'}
        </Button>
      )}
      {isLoginPage ? null : (
        <Button onClick={logout} color="danger" className="menuButtons">
          Log out
        </Button>
      )}
    </div>
  </header>
)

const mapStateToProps = state => ({
  isSettingsPage: state.page === 'settings',
  isLoginPage: state.page === 'login',
})

const mapDispatchToProps = dispatch => ({
  logout: () =>
    dispatch({
      type: 'LOGOUT',
    }),
  navigate: page =>
    dispatch({
      type: 'NAVIGATE',
      page: page,
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
