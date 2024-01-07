import { OptionsObject, SnackbarKey } from 'notistack'

export type NotificationKey = SnackbarKey

export interface Notification extends Pick<OptionsObject, 'variant'> {
  key: NotificationKey
  message: string
  isDismissed?: boolean
}

export type EnqueueNotificationPayload = Partial<Pick<Notification, 'key'>> &
  Omit<Notification, 'key'>

export type CloseNotificationPayload = NotificationKey

export type RemoveNotificationPayload = NotificationKey
