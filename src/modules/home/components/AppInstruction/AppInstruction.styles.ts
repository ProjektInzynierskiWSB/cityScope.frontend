import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.common.white
      : theme.palette.text.secondary,
}))

export const NavigationButtonContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  height: 50,
  width: 250,
  top: -40,
  zIndex: 10,
  right: 30,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.common.white
      : theme.palette.text.secondary,
}))
