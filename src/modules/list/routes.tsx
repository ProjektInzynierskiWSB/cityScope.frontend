import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { paths } from 'config'
import { Layout, Loadable, PrivateRoute } from 'shared/components'

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
        path: paths.announcementForm,
        element: (
          <PrivateRoute>
            <Loadable
              component={lazy(() => import('./views/CreateAnnouncement'))}
            />
          </PrivateRoute>
        ),
      },
    ],
  },
]

export default routes
