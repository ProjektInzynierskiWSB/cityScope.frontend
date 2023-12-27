import { useThemeContext } from 'shared/utils'
import { StyledSwitch } from './PalleteModeSwitch.styles'

const PalleteModeSwitch = () => {
  const { switchColorMode } = useThemeContext()
  return <StyledSwitch onChange={() => switchColorMode()} aria-atomic />
}

export default PalleteModeSwitch
