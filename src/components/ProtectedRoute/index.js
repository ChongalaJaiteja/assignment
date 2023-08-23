import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const userDetails = localStorage.getItem('userDetails')
  if (userDetails === null) {
    return <Redirect to="/" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
