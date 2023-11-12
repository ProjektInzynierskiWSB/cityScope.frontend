import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import breakpoints from './breakpoints'
import components from './components'
import palette, { getPaletteWithMode } from './palette'
import typography from './typography'

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints,
})

export const getThemeOptions = ({
  paletteMode,
}: {
  paletteMode: PaletteMode
}): ThemeOptions => ({
  palette: getPaletteWithMode(paletteMode),
  typography,
  components,
  breakpoints,
})

export default theme
