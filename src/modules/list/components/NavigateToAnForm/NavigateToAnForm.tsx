import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { useModuleTranslation } from 'modules/list/utils'
import { paths } from 'config'
import { Container } from './NavigateToAnForm.styles'

const NavigateToAnnouncementFormComponent = () => {
  const { t } = useModuleTranslation()
  const navigate = useNavigate()
  return (
    <Container>
      <Typography variant="h5">
        {t('navigateToAnnouncementForm.content')}
      </Typography>
      <Button variant="contained" onClick={() => navigate(paths.offerForm)}>
        {t('navigateToAnnouncementForm.buttonText')}
      </Button>
    </Container>
  )
}

export default NavigateToAnnouncementFormComponent
