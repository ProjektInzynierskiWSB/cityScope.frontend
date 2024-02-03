import { useState } from 'react'
import { Typography } from '@mui/material'
import { RegisterForm, LoginForm } from 'modules/authorization/components'
import { PalleteModeSwitch } from 'shared/components/TopBar/PalleteModeSwitch'
import { useModuleTranslation } from '../../utils'
import {
  BackgroundElement,
  BackgroundElement2,
  BackgroundElement3,
  Container,
  Content,
  Column,
  RegisterButton,
  SwitchModeContainer,
} from './Auth.styles'

const Auth = () => {
  const [isLoginView, setIsLoginView] = useState(true)
  const { t } = useModuleTranslation()

  const switchViews = () => setIsLoginView(value => !value)
  const LoginView = () => (
    <>
      <Column>
        <Typography variant="h4">{t('welcomeText')}</Typography>
        <Typography variant="h5">{t('registerInvitation')}</Typography>
        <RegisterButton variant="outlined" onClick={switchViews}>
          {t('buttons.register')}
        </RegisterButton>
      </Column>
      <LoginForm />
    </>
  )

  const RegisterView = () => (
    <>
      <Column>
        <Typography variant="h5">{t('registerInfo')}</Typography>
        <RegisterButton variant="outlined" onClick={switchViews}>
          {t('buttons.backToLogin')}
        </RegisterButton>
      </Column>
      <RegisterForm switchViews={switchViews} />
    </>
  )
  return (
    <Container>
      <SwitchModeContainer>
        <PalleteModeSwitch />
      </SwitchModeContainer>
      <BackgroundElement />
      <BackgroundElement2 />
      <BackgroundElement3 />
      <Content isLoginView={isLoginView}>
        {isLoginView ? LoginView() : RegisterView()}
      </Content>
    </Container>
  )
}

export default Auth
