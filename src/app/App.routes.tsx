import { RouteObject, useRoutes } from 'react-router-dom'
import Main from 'modules/home/views/Main'
import { paths } from 'config'
import { Layout, NotFound } from 'shared/components'
import { routes as moduleRoutes } from '../modules'

const routes: RouteObject[] = [
  ...moduleRoutes,
  {
    path: paths.home,
    element: <Layout />,
    children: [{ path: paths.home, element: <Main /> }],
  },
  {
    path: '*',
    element: <Layout />,
    children: [{ path: '*', element: <NotFound /> }],
  },
]

const AppRoutes = () => {
  const children = useRoutes(routes)
  return children
}

export default AppRoutes
