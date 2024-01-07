import api, { apiNotificationsMiddleware } from './api'
import auth from './auth'
import notifications from './notifications'

export const reducers = {
  [api.reducerPath]: api.reducer,
  [auth.name]: auth.reducer,
  [notifications.name]: notifications.reducer,
}

export const middleware = [api.middleware, apiNotificationsMiddleware]

export { auth, notifications, api }
