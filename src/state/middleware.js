import jsCookie from 'js-cookie'

const login = store => next => async action => {
  if (action.type === 'LOGIN') {
    const headers = new Headers()
    headers.set('x-auth', action.password)
    const res = await fetch('/entries', {
      method: 'GET',
      headers,
    })

    if (res.ok) {
      next({
        type: 'LOGIN_SUCCESS',
      })
      jsCookie.set('password', action.password)

      const data = await res.json()
      store.dispatch({
        type: 'ENTRIES',
        data,
      })
    } else {
      if ((await res.text()) === 'Bad credentials') {
        jsCookie.remove('password')
        store.dispatch({
          type: 'SHOW_MODAL',
          modal: {
            name: 'GENERIC',
            header: 'Error',
            text: 'Wrong password.',
          },
        })
      } else if (res.status === 429) {
        store.dispatch({
          type: 'SHOW_MODAL',
          modal: {
            name: 'GENERIC',
            header: 'Error',
            text: 'Too many wrong password attempts, please wait 5 minutes.',
          },
        })
      } else {
        store.dispatch({
          type: 'SHOW_MODAL',
          modal: {
            name: 'GENERIC',
            header: 'Error',
            text: 'Unknown error.',
          },
        })
      }
    }
  } else {
    return next(action)
  }
}

const deleteUser = store => next => async action => {
  if (action.type === 'DELETE_USER') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const res = await fetch(`/user?username=${action.username}`, {
      method: 'DELETE',
      headers,
    })
    if (res.ok) {
      store.dispatch({
        type: 'HIDE_MODAL',
      })
      next(action)
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('Delete user request failed')
    }
  } else {
    return next(action)
  }
}

const addUser = store => next => async action => {
  if (action.type === 'ADD_USER') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const res = await fetch(`/user?username=${action.username.replace(/ /, '+')}&startTime=${action.startTime}&endTime=${action.endTime}`, {
      method: 'POST',
      headers,
    })

    if (res.ok) {
      next(action)
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('add user request failed')
    }
  } else {
    return next(action)
  }
}

const addPass = store => next => async action => {
  if (action.type === 'ADD_PASS') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const username = store.getState().modal.username

    const res = await fetch(`/pass?username=${username}`, {
      method: 'PUT',
      headers,
    })
    store.dispatch({
      type: 'HIDE_MODAL',
      modal: 'addPass',
    })
    if (res.ok) {
      const passID = (await res.text()).split(':')[1]
      next({
        ...action,
        passID,
        username,
      })
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('Error in add pass request')
    }
  } else {
    return next(action)
  }
}

const removePass = store => next => async action => {
  if (action.type === 'REMOVE_PASS') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const res = await fetch(`/pass?username=${action.username}&pass=${action.pass}`, {
      method: 'DELETE',
      headers,
    })

    if (res.ok) {
      return next(action)
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('Error with remove pass request')
    }
  } else {
    return next(action)
  }
}

const logout = store => next => action => {
  if (action.type === 'LOGOUT') {
    jsCookie.remove('password')
  }

  return next(action)
}

const changePassword = store => next => async action => {
  if (action.type === 'CHANGE_PASSWORD') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const res = await fetch(`/adminpassword?password=${action.newPassword}`, {
      method: 'PUT',
      headers,
    })

    if (res.ok) {
      jsCookie.remove('password')
      return next(action)
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('Error with remove pass request')
    }
  } else {
    return next(action)
  }
}

const restartScanner = store => next => async action => {
  if (action.type === 'RESTART_SCANNER') {
    const password = jsCookie.get('password')
    const headers = new Headers()
    headers.set('x-auth', password)

    const res = await fetch(`/restart`, {
      method: 'GET',
      headers,
    })

    if (res.ok) {
      store.dispatch({
        type: 'NAVIGATE',
        page: 'overview',
      })
    } else {
      store.dispatch({
        type: 'SHOW_MODAL',
        modal: {
          name: 'GENERIC',
          header: 'Error',
          text: 'Unknown error.',
        },
      })
      console.error('error in restart request')
    }
  } else {
    return next(action)
  }
}

const logger = store => next => action => {
  console.log('ACTION:', action)
  next(action)
}

export default [logger, restartScanner, changePassword, logout, removePass, addPass, addUser, deleteUser, login]
