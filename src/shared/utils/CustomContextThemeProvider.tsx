import { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material'
import { getThemeOptions } from 'shared/theme'
import { ThemeContextProvider } from './ThemeContext'

interface CustomContextThemeProviderProps extends PropsWithChildren<{}> {}

const CustomContextThemeProvider = ({
  children,
}: CustomContextThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const theme = useMemo(
    () => createTheme(getThemeOptions({ paletteMode: mode })),
    [mode]
  )

  const switchColorMode = useCallback((mode?: PaletteMode) => {
    setMode((prevMode: PaletteMode) =>
      !mode ? (prevMode === 'light' ? 'dark' : 'light') : mode
    )
  }, [])

  return (
    <ThemeContextProvider value={{ colorMode: mode, switchColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContextProvider>
  )
}

export default CustomContextThemeProvider
