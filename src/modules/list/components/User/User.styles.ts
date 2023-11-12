import { styled } from '@mui/material'

export const UserContainer = styled('div')(({ theme }) => ({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}))
