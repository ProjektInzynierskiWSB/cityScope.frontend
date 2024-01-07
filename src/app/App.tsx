import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline } from '@mui/material'
import {
  Loader,
  CustomContextThemeProvider,
  NotificationsProvider,
} from 'shared/components'
import { store, persistor } from './store'
import AppRoutes from './App.routes'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <NotificationsProvider>
          <CustomContextThemeProvider>
            <CssBaseline />
            <Suspense fallback={<Loader />}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </Suspense>
          </CustomContextThemeProvider>
        </NotificationsProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
