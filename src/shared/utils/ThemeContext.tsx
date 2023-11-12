import { createContext, useContext } from 'react'
import { PaletteMode } from '@mui/material'

interface ThemeContextValue {
  colorMode: PaletteMode
  switchColorMode: (mode?: PaletteMode) => void
}

const defaultValue: ThemeContextValue = {
  colorMode: 'light',
  switchColorMode: () => {},
}

const ThemeContext = createContext(defaultValue)

export const ThemeContextProvider = ThemeContext.Provider

export const useThemeContext = () => useContext(ThemeContext)
