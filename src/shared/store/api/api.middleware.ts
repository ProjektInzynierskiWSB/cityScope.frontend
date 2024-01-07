import { isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit'
import type { Action, Middleware } from '@reduxjs/toolkit'
import notifications from '../notifications'
import api from './api'
import { ApiNotificationsMiddlewarePayload } from './api.types'

export const apiNotificationsMiddleware: Middleware =
  ({ dispatch }) =>
  next =>
  (action: any) => {
    if (!(action as Action).type.startsWith(api.reducerPath))
      return next(action)

    const { meta } = action
    const { errorMessage, successMessage } = (meta?.arg?.originalArgs ||
      {}) as ApiNotificationsMiddlewarePayload

    if (isFulfilled(action) && successMessage) {
      dispatch(
        notifications.actions.enqueueNotification({
          variant: 'success',
          message:
            typeof successMessage === 'string' ? successMessage : 'SUCCESS',
        })
      )
    }
    if (isRejectedWithValue(action) && errorMessage) {
      dispatch(
        notifications.actions.enqueueNotification({
          variant: 'error',
          message: typeof errorMessage === 'string' ? errorMessage : 'ERROR',
        })
      )
    }

    return next(action)
  }
