import { Typography, styled } from '@mui/material'

export const Container = styled('div')({
  width: '100%',
  height: '90vh',
  position: 'relative',
})

export const StyledImg = styled('img')({
  width: '100%',
  height: '90vh',
  objectFit: 'cover',
})

export const TextContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 80,
  left: 50,
  maxWidth: 640,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  color: theme.palette.text.primary,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}))
