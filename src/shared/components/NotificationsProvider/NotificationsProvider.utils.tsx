import { PropsWithChildren, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import notifications, { NotificationKey } from 'shared/store/notifications'

const useNotificationsProvider = () => {
  const displayedNotificationKeys = useRef<NotificationKey[]>([])
  const dispatch = useDispatch()
  const currentNotifications = useSelector(
    notifications.selectors.getNotifications
  )
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const storeDisplayed = (key: NotificationKey) => {
    displayedNotificationKeys.current = [
      ...displayedNotificationKeys.current,
      key,
    ]
  }
  const removeDisplayed = (key: NotificationKey) => {
    displayedNotificationKeys.current =
      displayedNotificationKeys.current.filter(
        displayedKey => displayedKey !== key
      )
  }

  useEffect(() => {
    currentNotifications.forEach(
      ({ key, message, isDismissed, ...options }) => {
        if (isDismissed) return closeSnackbar(key)
        if (displayedNotificationKeys.current.includes(key)) return

        enqueueSnackbar(message, {
          ...options,
          key,
          onExited: (_, key) => {
            dispatch(notifications.actions.removeNotification(key))
            removeDisplayed(key)
          },
        })

        storeDisplayed(key)
      }
    )
  }, [currentNotifications, dispatch, closeSnackbar, enqueueSnackbar])
}

export const StoreNotificationsConnector = ({
  children,
}: PropsWithChildren<{}>) => {
  useNotificationsProvider()
  return <>{children}</>
}
