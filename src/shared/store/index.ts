import api, { apiNotificationsMiddleware } from './api'
import auth from './auth'
import list from './list'
import notifications from './notifications'

export const reducers = {
  [api.reducerPath]: api.reducer,
  [auth.name]: auth.reducer,
  [list.name]: list.reducer,
  [notifications.name]: notifications.reducer,
}

export const middleware = [api.middleware, apiNotificationsMiddleware]

export { auth, list, notifications, api }
