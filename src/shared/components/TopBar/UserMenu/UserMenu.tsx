import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Logout from '@mui/icons-material/Logout'
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from '@mui/material'
import authStore from 'shared/store/auth'
import { CenterBox, StyledMenu, UserAvatar } from './UserMenu.styles'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const uesrName = useSelector(authStore.selectors.getUserName)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    dispatch(authStore.actions.clearToken())
    handleClose()
  }

  return (
    <>
      <CenterBox>
        <Tooltip title={t('topBar.profileOptions')}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <UserAvatar>{uesrName?.charAt(0) || 'U'}</UserAvatar>
          </IconButton>
        </Tooltip>
      </CenterBox>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {uesrName || t('topBar.myProfile')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t('topBar.logout')}
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default UserMenu
