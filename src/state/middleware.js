import jsCookie from 'js-cookie'

export const loginMiddleware = store => next => async action => {
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
