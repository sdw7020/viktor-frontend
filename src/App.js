import React, { Component } from 'react'
import logo from './viktorlogo.png'
import './App.css'
import { Input, Button } from 'reactstrap'

//import Overview from './components/login/LoginScreen'
import Overview from './components/overview/Overview'


export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">made by Group 22</h1>
    </header>

    <div id="container">
      <Overview />
    </div>
  </div>
)
