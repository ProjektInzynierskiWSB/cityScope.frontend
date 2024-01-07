import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { paths } from 'config'
import authStore from 'shared/store/auth'
import AccountMenu from '../UserMenu/UserMenu'
import { Container, MenuButton } from './Menu.styles'

const Menu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isLogged = useSelector(authStore.selectors.getToken)
  return (
    <Container>
      <MenuButton
        variant="text"
        onClick={() => navigate(paths.announcementForm)}
      >
        {t('topBar.createAnnouncement')}
      </MenuButton>
      <MenuButton variant="text" onClick={() => navigate(paths.list)}>
        {t('topBar.list')}
      </MenuButton>
      {!!isLogged ? (
        <AccountMenu />
      ) : (
        <MenuButton variant="text" onClick={() => navigate(paths.auth)}>
          {t('topBar.login')}
        </MenuButton>
      )}
    </Container>
  )
}

export default Menu
