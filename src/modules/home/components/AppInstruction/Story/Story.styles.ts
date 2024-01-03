import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  width: '90%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: 1700,
  margin: 'auto',
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  gap: theme.spacing(10),
}))

export const Row = styled('div', {
  shouldForwardProp: prop => prop !== 'isEven',
})<{ isEven: boolean }>(({ isEven }) => ({
  display: 'flex',
  flexDirection: isEven ? 'row-reverse' : 'row',
}))

export const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: theme.spacing(6),
  gap: theme.spacing(3),
}))
