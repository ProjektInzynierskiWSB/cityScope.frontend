import { SnackbarProvider, SnackbarProviderProps } from 'notistack'
import { StoreNotificationsConnector } from './NotificationsProvider.utils'

export interface NotificationsProviderProps extends SnackbarProviderProps {}

const NotificationsProvider = ({
  children,
  ...props
}: NotificationsProviderProps) => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  >
    <StoreNotificationsConnector>{children}</StoreNotificationsConnector>
  </SnackbarProvider>
)

export default NotificationsProvider
