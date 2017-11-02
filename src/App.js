import React from "react"
import "./App.css"
import { connect } from "react-redux"

<<<<<<< HEAD
import Header from './components/Header'
import LoginScreen from './components/login/LoginScreen'
import Overview from './components/overview/Overview'
import Settings from './components/settings/Settings'
=======
import Header from "./components/Header"
import LoginScreen from "./components/login/LoginScreen"
import Overview from "./components/overview/Overview"
>>>>>>> 5d3340427ea5dbe03f16de508bed0768ae9eec8c

const App = ({ page }) => (
  <div className="App">
    <Header />
    <div id="container">
      {page === "login" ? <LoginScreen /> : page === "overview" ? <Overview /> : page === "settings" ? <Settings /> : <p> unknown page </p>}
    </div>
  </div>
)

const mapStateToProps = state => ({
  page: state.page,
})

export default connect(mapStateToProps)(App)
