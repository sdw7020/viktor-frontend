import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import Header from './components/Header'
import LoginScreen from './components/login/LoginScreen'
import Overview from './components/overview/Overview'

const App = ({ page }) => (
  <div className="App">
    <Header />
    <div id="container">{page === 'login' ? <LoginScreen /> : page === 'overview' ? <Overview /> : <p> unknown page </p>}</div>
  </div>
)

const mapStateToProps = state => ({
  page: state.page,
})

export default connect(mapStateToProps)(App)
