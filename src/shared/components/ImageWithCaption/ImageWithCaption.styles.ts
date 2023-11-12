import { styled, Typography } from '@mui/material'

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'relative',
  width: 800,
})

export const Image = styled('img')({
  objectFit: 'cover',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 16,
})

export const Caption = styled(Typography)({
  color: 'black',
  position: 'absolute',
  bottom: 0,
  right: 20,
})
