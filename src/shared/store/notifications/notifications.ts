import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import {
  Notification,
  CloseNotificationPayload,
  EnqueueNotificationPayload,
  RemoveNotificationPayload,
} from './notifications.types'

type State = Notification[]

const initialState: State = []

const notifications = createSlice({
  initialState,
  name: 'sharedNotifications',
  reducers: {
    enqueueNotification: {
      prepare: (payload: EnqueueNotificationPayload) => {
        const notification: Notification = { key: nanoid(), ...payload }
        return { payload: notification }
      },
      reducer: (state, action: PayloadAction<Notification>) => {
        state.push(action.payload)
      },
    },
    removeNotification: (
      state,
      action: PayloadAction<RemoveNotificationPayload>
    ) => state.filter(notification => notification.key !== action.payload),
    closeNotification: (
      state,
      action: PayloadAction<CloseNotificationPayload>
    ) =>
      state.map(notification =>
        notification.key === action.payload
          ? { ...notification, isDismissed: true }
          : notification
      ),
    closeAllNotifications: state =>
      state.map(notification => ({ ...notification, isDismissed: true })),
  },
})

export default notifications
