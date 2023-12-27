import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { paths } from 'config'
import { Loadable } from 'shared/components'

const routes: RouteObject[] = [
  {
    path: paths.auth,
    element: <Loadable component={lazy(() => import('./views/Auth'))} />,
  },
]

export default routes
