import jsCookie from 'js-cookie'

const loginMiddleware = store => next => async action => {
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

const deleteUserMiddleware = store => next => async action => {
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

const logger = store => next => action => {
  console.log('ACTION:', action)
  next(action)
}

export default [logger, deleteUserMiddleware, loginMiddleware]
