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
      jsCookie.remove('password')
      next({
        type: 'LOGIN_FAILURE',
      })
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
        modal: 'deleteUser',
      })
      next(action)
    } else {
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

    const username = store.getState().modals.addPassUsername

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
      console.error('Error in add pass request')
    }
  } else {
    return next(action)
  }
}

const logger = store => next => action => {
  console.log('ACTION:', action)
  next(action)
}

export default [logger, addPass, addUser, deleteUser, login]
