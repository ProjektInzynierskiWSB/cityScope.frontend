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
      padding: '3px 23px',
      '&:hover': {
        borderWidth: 1,
      },
    },
    contained: {
      color: palette.text?.secondary,
    },
    text: {},
  },
}

export default MuiButton
