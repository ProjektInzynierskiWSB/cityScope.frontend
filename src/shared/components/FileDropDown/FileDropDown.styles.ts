import { styled, alpha } from '@mui/material'

export const Container = styled('div', {
  shouldForwardProp: prop => prop !== 'isDragActive',
})<{ isDragActive?: boolean }>(({ isDragActive, theme }) => ({
  width: 600,
  border: `1px dashed ${
    isDragActive
      ? theme.palette.primary.main
      : alpha(theme.palette.primary.light, 0.6)
  }`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

export const ImgPreview = styled('div')({
  marginTop: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
