const defaultState = {
  page: 'login',
  entries: [],
  modal: null,
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
    return {
      ...oldState,
      modal: action.modal,
    }
  }

  if (action.type === 'HIDE_MODAL') {
    return {
      ...oldState,
      modal: null,
    }
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

  if (action.type === 'REMOVE_PASS') {
    return {
      ...oldState,
      entries: oldState.entries.map(entry => {
        if (entry.username === action.username) {
          return {
            ...entry,
            passIDs: entry.passIDs.filter(id => id !== action.pass),
          }
        } else {
          return entry
        }
      }),
    }
  }

  if (action.type === 'LOGOUT') {
    return {
      ...oldState,
      page: 'login',
    }
  }

  if (action.type === 'NAVIGATE') {
    return {
      ...oldState,
      page: action.page,
    }
  }

  if (action.type === 'CHANGE_PASSWORD') {
    return {
      ...oldState,
      page: 'login',
    }
  }
  return oldState
}
