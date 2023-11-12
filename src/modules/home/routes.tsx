import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { paths } from 'config'
import { Layout, Loadable } from 'shared/components'

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Loadable component={lazy(() => import('./views/Main'))} />,
      },
    ],
  },
]

export default routes
