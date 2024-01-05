import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { Loader, CustomContextThemeProvider } from 'shared/components'
import { store } from './store'
import AppRoutes from './App.routes'

const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <CustomContextThemeProvider>
          <CssBaseline />
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </CustomContextThemeProvider>
      </SnackbarProvider>
    </Provider>
  )
}
export default App
