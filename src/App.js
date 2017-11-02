import React from "react"
import "./App.css"
import { connect } from "react-redux"

import Header from "./components/Header"
import LoginScreen from "./components/login/LoginScreen"
import Overview from "./components/overview/Overview"

const App = ({ isLoggedIn }) => (
  <div className="App">
    <Header />
    <div id="container">{isLoggedIn ? <Overview /> : <LoginScreen />}</div>
  </div>
)

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
})

export default connect(mapStateToProps)(App)
