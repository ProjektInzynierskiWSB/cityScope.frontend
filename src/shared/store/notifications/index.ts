import notifications from './notifications'
import * as selectors from './notifications.selectors'

const store = { ...notifications, selectors }

export default store

export type {
  Notification,
  NotificationKey,
  EnqueueNotificationPayload,
} from './notifications.types'
