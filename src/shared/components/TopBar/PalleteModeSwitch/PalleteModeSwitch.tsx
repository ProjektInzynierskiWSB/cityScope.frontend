import { useThemeContext } from 'shared/utils/ThemeContext'
import { StyledSwitch } from './PalleteModeSwitch.styles'

const PalleteModeSwitch = () => {
  const { switchColorMode } = useThemeContext()
  return <StyledSwitch onChange={() => switchColorMode()} />
}

export default PalleteModeSwitch
