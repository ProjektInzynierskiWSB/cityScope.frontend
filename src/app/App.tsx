import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { Loader, CustomContextThemeProvider } from 'shared/components'
import AppRoutes from './App.routes'

const App = () => {
  return (
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
  )
}
export default App
