import { alpha, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  height: 400,
  display: 'flex',
  borderRadius: 8,
  border:
    theme.palette.mode === 'light'
      ? 'none'
      : `solid 1px ${alpha(theme.palette.primary.main, 0.4)}`,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0px 0px 20px 0px rgba(66, 68, 90, 0.05)'
      : 'none',
}))

export const ImageContainer = styled('div')({
  width: 400,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Image = styled('img')({
  width: 380,
  height: 380,
  objectFit: 'contain',
  borderRadius: 6,
})

export const ContentContainer = styled('div')(({ theme }) => ({
  width: 800,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4, 4, 4, 2),
  gap: theme.spacing(2),
  overflow: 'hidden',
}))

export const Row = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
