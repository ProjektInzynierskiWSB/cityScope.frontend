import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
  padding: theme.spacing(6),
}))
