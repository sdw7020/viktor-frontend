import React from 'react'
import logo from './viktorlogo.png'
import './App.css'
import { connect } from 'react-redux'

import LoginScreen from './components/login/LoginScreen'
import Overview from './components/overview/Overview'

const App = ({ isLoggedIn }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">made by Group 22</h1>
    </header>
    <div id="container">{isLoggedIn ? <Overview /> : <LoginScreen />}</div>
  </div>
)

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
})

export default connect(mapStateToProps)(App)
