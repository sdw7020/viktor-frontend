const jsCookie = require('js-cookie')

const defaultState = {
  isLoggedIn: !!jsCookie.get('password'),
  entries: [],
}

export default function reducer(oldState = defaultState, action) {
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...oldState,
      isLoggedIn: true,
    }
  }

  if (action.type === 'LOGIN_FAILURE') {
    return {
      ...oldState,
      isLoggedIn: false,
      entries: [],
    }
  }

  if (action.type === 'ENTRIES') {
  }

  return oldState
}
