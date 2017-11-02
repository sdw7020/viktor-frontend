import { connect } from 'react-redux'
import Login from './Login'

const mapDispatchToProps = dispatch => ({
  login: password =>
    dispatch({
      type: 'LOGIN',
      password,
    }),
})

export default connect(undefined, mapDispatchToProps)(Login)
