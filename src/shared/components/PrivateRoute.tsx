import { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { paths } from 'config'
import authStore from 'shared/store/auth'

export interface PrivateRouteProps extends PropsWithChildren {}

const PrivateRoute = ({ children, ...props }: PrivateRouteProps) => {
  const token = useSelector(authStore.selectors.getToken)
  const isAuthenticated = !!token

  return isAuthenticated ? children : <Navigate to={paths.auth} />
}

export default PrivateRoute
