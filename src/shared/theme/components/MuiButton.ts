import { Components } from '@mui/material'
import palette from '../palette'

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: 5,
      fontWeight: 400,
      letterSpacing: 1,
      padding: '4px 24px',
    },
    outlined: {
      borderWidth: 1,
      '&:hover': {
        borderWidth: 1,
      },
    },
    outlinedPrimary: {
      borderColor: palette.primary?.main,
      color: palette.primary?.dark,
    },
    outlinedSecondary: {
      borderColor: palette.secondary?.main,
      color: palette.secondary?.dark,
    },
    contained: {
      color: palette.text?.secondary,
    },
    text: {},
  },
}

export default MuiButton
