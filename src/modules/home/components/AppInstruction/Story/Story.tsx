import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { useModuleTranslation } from 'modules/home/utils'
import { paths } from 'config'
import { ImageWithCaption } from 'shared/components'
import { images } from './Story.consts'
import { Container, Row, TextContainer } from './Story.styles'

const Story = () => {
  const navigate = useNavigate()
  const { t } = useModuleTranslation()
  return (
    <Container>
      {images.map((image, index) => (
        <Row isEven={index % 2 === 0} key={index}>
          <ImageWithCaption
            key={index}
            imgSrc={image.img}
            imgAlt={image.alt}
            width={820}
            height={475}
          />
          <TextContainer>
            <Typography variant="h6">{t(image.description)}</Typography>
            {index % 2 !== 0 && (
              <Button
                variant="contained"
                onClick={() => navigate(paths.offerForm)}
              >
                {t('story.buttonText')}
              </Button>
            )}
          </TextContainer>
        </Row>
      ))}
    </Container>
  )
}

export default Story
