import { Typography } from '@mui/material'
import { AnnouncementForm } from 'modules/list/components'
import { useModuleTranslation } from 'modules/list/utils'
import { Container } from './CreateAnnouncement.styles'

const CreateAnnouncementComponent = () => {
  const { t } = useModuleTranslation()
  return (
    <Container>
      <Typography variant="h4">{t('announcementForm.title')}</Typography>
      <AnnouncementForm />
    </Container>
  )
}

export default CreateAnnouncementComponent
