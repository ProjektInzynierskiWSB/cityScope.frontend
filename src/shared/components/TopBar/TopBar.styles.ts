import { AppBar, Toolbar, alpha, styled } from '@mui/material'

export const MenuBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(0, 4),
  backgroundColor: theme.palette.secondary.contrastText,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: '0px 0px 20px 5px rgba(66, 68, 90, 0.1)',
        borderBottom: 'none',
      }
    : {
        boxShadow: 'none',
        borderBottom: `solid 1px ${alpha(theme.palette.primary.main, 0.4)}`,
      }),
}))

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const LogoContainer = styled('div')({
  cursor: 'pointer',
})
