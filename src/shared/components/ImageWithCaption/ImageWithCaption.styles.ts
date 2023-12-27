import { styled, Typography } from '@mui/material'

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'relative',
  width: 800,
})

export const Image = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2.5),
  borderRadius: 16,
}))

export const Caption = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  position: 'absolute',
  bottom: 0,
  right: 20,
}))
