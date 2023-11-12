import { Typography } from '@mui/material'
import { ImageWithCaption } from 'shared/components'
import { images } from './Story.consts'
import { Container, Row, TextContainer } from './Story.styles'

const Story = () => {
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
            <Typography variant="h6">{image.description}</Typography>
          </TextContainer>
        </Row>
      ))}
    </Container>
  )
}

export default Story
