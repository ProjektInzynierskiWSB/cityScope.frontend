import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { Container, Typography, Button } from '@mui/material'
import { paths } from 'config'

export interface NotFoundProps {}

const NotFound = (props: NotFoundProps) => {
  const { t } = useTranslation('root')
  return (
    <Container {...props} sx={{ marginTop: 20 }}>
      <Typography variant="h2" gutterBottom>
        {t('notFound.heading')}
      </Typography>
      <Typography paragraph gutterBottom>
        {t('notFound.description')}
      </Typography>
      <Button component={RouterLink} to={paths.root} variant="contained">
        {t('notFound.button')}
      </Button>
    </Container>
  )
}

export default NotFound
