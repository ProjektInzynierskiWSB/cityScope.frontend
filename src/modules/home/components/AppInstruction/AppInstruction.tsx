import { useRef } from 'react'
import { Button } from '@mui/material'
import { useModuleTranslation } from '../../utils'
import { Story } from './Story'
import { Container, NavigationButtonContainer } from './AppInstruction.styles'

const AppInstruction = () => {
  const { t } = useModuleTranslation()
  const ref = useRef<null | HTMLDivElement>(null)

  const executeScroll = () =>
    ref.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Container ref={ref}>
      <NavigationButtonContainer>
        <Button variant="text" onClick={executeScroll} fullWidth>
          {t('showHow')}
        </Button>
      </NavigationButtonContainer>
      <Story />
    </Container>
  )
}

export default AppInstruction
