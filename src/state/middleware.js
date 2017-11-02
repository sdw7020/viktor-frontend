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

export default [loginMiddleware]
