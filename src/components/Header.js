import React from 'react'
import logo from '../viktorlogo.png'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const Header = ({ logout, goToSettings }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">made by Group 22</h1>

    <div id="menuBar">
      <Button onClick={goToSettings} className="menuButtons">
        Settings
      </Button>
      <Button onClick={logout} color="danger" className="menuButtons">
        Log out
      </Button>
    </div>
  </header>
)

const mapDispatchToProps = dispatch => ({
  logout: () =>
    dispatch({
      type: 'LOGOUT',
    }),
  goToSettings: () =>
    dispatch({
      type: 'NAVIGATE',
      page: 'settings',
    }),
})

export default connect(undefined, mapDispatchToProps)(Header)
