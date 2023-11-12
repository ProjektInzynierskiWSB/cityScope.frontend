import { Typography } from '@mui/material'
import Box from 'assets/photos/boxes.jpg'
import { useModuleTranslation } from '../../utils'
import { Container, StyledImg, TextContainer, Title } from './Header.styles'

const Header = () => {
  const { t } = useModuleTranslation()

  return (
    <Container>
      <TextContainer>
        <Title>{t('header.title')}</Title>
        <Typography variant="h6">{t('header.subtitle')}</Typography>
        <Typography variant="h6">{t('header.subtitleV2')}</Typography>
      </TextContainer>
      <StyledImg src={Box} alt="man-under-boxes" />
    </Container>
  )
}

export default Header
