import { alpha, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
}))

export const UserContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  padding: theme.spacing(2),
  ...(theme.palette.mode === 'light'
    ? { border: 'none', boxShadow: '0px 0px 20px 0px rgba(66, 68, 90, 0.05)' }
    : {
        border: `solid 1px ${alpha(theme.palette.primary.main, 0.4)}`,
        boxShadow: 'none',
      }),
}))
