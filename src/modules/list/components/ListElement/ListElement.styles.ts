import { alpha, styled, Button } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  height: 400,
  display: 'flex',
  borderRadius: 8,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: '0px 0px 20px 0px rgba(66, 68, 90, 0.05)',
        border: 'none',
      }
    : {
        boxShadow: 'none',
        border: `solid 1px ${alpha(theme.palette.primary.main, 0.4)}`,
      }),
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
  overflow: 'hidden',
  gap: theme.spacing(2),
}))

export const DescriptionContainer = styled('div')({
  width: 700,
  '& > p': {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
  },
})

export const StyledButton = styled(Button)({
  textTransform: 'capitalize',
  width: '25%',
  alignSelf: 'flex-end',
  marginTop: 'auto',
})
