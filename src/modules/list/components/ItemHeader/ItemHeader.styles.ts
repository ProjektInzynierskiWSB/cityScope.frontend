import { Button, Typography, alpha, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  minHeight: 400,
  width: '100%',
  display: 'flex',
  borderRadius: 8,
  gap: theme.spacing(2),
  ...(theme.palette.mode === 'light'
    ? { border: 'none', boxShadow: '0px 0px 20px 0px rgba(66, 68, 90, 0.05)' }
    : {
        border: `solid 1px ${alpha(theme.palette.primary.main, 0.4)}`,
        boxShadow: 'none',
      }),
}))

export const ImageContainer = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
}))

export const Image = styled('img')({
  width: 380,
  height: 380,
  objectFit: 'contain',
  borderRadius: 6,
})

export const ContentContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4, 4, 4, 2),
  gap: theme.spacing(2),
  overflow: 'hidden',
}))

export const OrderButton = styled(Button)({
  marginTop: 'auto',
  marginLeft: 'auto',
  width: 300,
})

export const ColoredText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}))

export const Row = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})
