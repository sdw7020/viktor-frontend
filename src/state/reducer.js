const jsCookie = require('js-cookie')

const defaultState = {
  isLoggedIn: !!jsCookie.get('password'),
  entries: [],
  modals: {
    deleteUser: false,
    addPass: false,
  },
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
    return {
      ...oldState,
      entries: action.data,
    }
  }

  if (action.type === 'SHOW_MODAL') {
    const newState = { ...oldState, modals: { ...oldState.modals } }
    newState.modals[action.modal] = true
    return newState
  }

  if (action.type === 'HIDE_MODAL') {
    const newState = { ...oldState, modals: { ...oldState.modals } }
    newState.modals[action.modal] = false
    return newState
  }

  if (action.type === 'DELETE_USER') {
    return {
      ...oldState,
      entries: oldState.entries.filter(({ username }) => username !== action.username),
    }
  }

  if (action.type === 'ADD_USER') {
    return {
      ...oldState,
      entries: [
        ...oldState.entries,
        {
          username: action.username,
          startTime: action.startTime,
          endTime: action.endTime,
          passIDs: [],
        },
      ],
    }
  }
  return oldState
}
