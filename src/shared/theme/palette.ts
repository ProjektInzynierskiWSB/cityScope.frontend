import { Palette, PaletteColor, PaletteMode, alpha } from '@mui/material'

declare module '@mui/material/styles' {
  interface ExtraPalette {
    mistyLawn: PaletteColor
    wizardWhite: PaletteColor
    arabicaMint: PaletteColor
    saltyIce: PaletteColor
    contrail: PaletteColor
  }

  interface Theme {
    extra: ExtraPalette
  }
  interface ThemeOptions {
    extra?: Partial<ExtraPalette>
  }
  interface Palette {
    extra: Partial<ExtraPalette>
  }
}

const palette: Partial<Palette> = {
  primary: {
    light: '#FF999A',
    main: '#F94D4E',
    dark: '#D42633',
    contrastText: '#343434',
  },
  secondary: {
    light: '#95C2F3',
    main: '#67A7EE',
    dark: '#3C84C8',
    contrastText: '#F9F7EC',
  },
  text: {
    primary: '#343434',
    secondary: '#F9F7EC',
    disabled: alpha('#343434', 0.6),
  },
}

export const getPaletteWithMode = (mode: PaletteMode): Partial<Palette> => ({
  mode,
  ...(mode === 'light'
    ? { ...palette }
    : {
        primary: {
          light: '#95C2F3',
          main: '#67A7EE',
          dark: '#00236C',
          contrastText: '#F9F7EC',
        },
        secondary: {
          light: '#FF999A',
          main: '#F94D4E',
          dark: '#620000',
          contrastText: '#262626',
        },
        text: {
          primary: '#F9F7EC',
          secondary: '#262626',
          disabled: alpha('#F9F7EC', 0.6),
        },
      }),
})

export default palette
