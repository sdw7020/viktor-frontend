const defaultState = {
  page: 'login',
  entries: [],
  modals: {
    deleteUser: false,
    deleteUserUsername: null,
    addPass: false,
  },
}

export default function reducer(oldState = defaultState, action) {
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...oldState,
      page: 'overview',
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
    newState.modals[`${action.modal}Username`] = action.username
    return newState
  }

  if (action.type === 'HIDE_MODAL') {
    const newState = { ...oldState, modals: { ...oldState.modals } }
    newState.modals[action.modal] = false
    newState.modals[`${action.modal}Username`] = null
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

  if (action.type === 'ADD_PASS') {
    return {
      ...oldState,
      entries: oldState.entries.map(entry => {
        if (entry.username === action.username) {
          console.log('foundem, adding pass')
          return {
            ...entry,
            passIDs: [...entry.passIDs, action.passID],
          }
        } else {
          return entry
        }
      }),
    }
  }
  return oldState
}
