import { Button, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(1),
  marginRight: theme.spacing(2),
  justifyContent: 'flex-end',
}))

export const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
}))
