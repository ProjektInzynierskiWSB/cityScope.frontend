import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { paths } from 'config'
import { Container, MenuButton } from './Menu.styles'

const Menu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Container>
      <MenuButton variant="text" onClick={() => navigate(paths.offerForm)}>
        {t('topBar.createAnnouncement')}
      </MenuButton>
      <MenuButton variant="text" onClick={() => navigate(paths.list)}>
        {t('topBar.list')}
      </MenuButton>
    </Container>
  )
}

export default Menu
