import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './state/reducer'
import middleware from './state/middleware'
import jsCookie from 'js-cookie'

const store = createStore(reducer, applyMiddleware(...middleware))

window.mystore = store

if (jsCookie.get('password')) {
  const headers = new Headers()
  headers.set('x-auth', jsCookie.get('password'))

  fetch('/entries', {
    headers,
    method: 'GET',
  })
    .then(res => {
      if (res.ok) {
        store.dispatch({
          type: 'LOGIN_SUCCESS',
        })
        return res.json()
      } else {
        jsCookie.remove('password')
        store.dispatch({
          type: 'LOGIN_FAILURE',
        })
      }
    })
    .then(data => {
      store.dispatch({
        type: 'ENTRIES',
        data,
      })
    })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
