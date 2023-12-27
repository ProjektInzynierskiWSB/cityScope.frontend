import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as LogoDarkMode } from 'assets/icons/logoDarkMode.svg'
import { paths } from 'config'
import { useThemeContext } from '../../utils'
import { Menu } from './Menu'
import { PalleteModeSwitch } from './PalleteModeSwitch'
import { MenuBar, StyledToolbar, LogoContainer } from './TopBar.styles'

const TopBar = () => {
  const { colorMode } = useThemeContext()
  const navigate = useNavigate()

  return (
    <MenuBar>
      <StyledToolbar>
        <LogoContainer onClick={() => navigate(paths.home)}>
          {colorMode === 'light' ? <Logo /> : <LogoDarkMode />}
        </LogoContainer>
        <Menu />
        <PalleteModeSwitch />
      </StyledToolbar>
    </MenuBar>
  )
}

export default TopBar
