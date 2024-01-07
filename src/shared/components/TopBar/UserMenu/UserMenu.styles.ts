import { Avatar, styled, Menu, Box } from '@mui/material'

export const CenterBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
})

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: 32,
  height: 32,
  '&:hover': {
    cursor: 'pointer',
  },
}))

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    overflow: 'visible',
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))',
    '& .MuiList-root': {
      '& .MuiButtonBase-root': {
        display: 'flex',
        gap: theme.spacing(1),
        '& .MuiAvatar-root': {
          backgroundColor: theme.palette.primary.light,
          width: 32,
          height: 32,
        },
      },
    },
  },
}))
