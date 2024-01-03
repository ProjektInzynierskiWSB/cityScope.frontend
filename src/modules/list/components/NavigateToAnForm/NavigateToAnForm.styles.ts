import { alpha, styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  width: 1200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(6),
  padding: theme.spacing(4),
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
