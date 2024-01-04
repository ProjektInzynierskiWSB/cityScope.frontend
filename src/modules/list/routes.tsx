import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { paths } from 'config'
import { Layout, Loadable } from 'shared/components'

const routes: RouteObject[] = [
  {
    path: paths.list,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Loadable component={lazy(() => import('./views/ItemList'))} />
        ),
      },
      {
        index: true,
        path: paths.item,
        element: <Loadable component={lazy(() => import('./views/Item'))} />,
      },
      {
        index: true,
        path: paths.offerForm,
        element: (
          <Loadable
            component={lazy(() => import('./views/CreateAnnouncement'))}
          />
        ),
      },
    ],
  },
]

export default routes
