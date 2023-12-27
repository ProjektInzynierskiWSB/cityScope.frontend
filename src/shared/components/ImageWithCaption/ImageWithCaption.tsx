import { Caption, Container, Image } from './ImageWithCaption.styles'

export interface ImageWithCaptionProps {
  imgSrc: string
  imgAlt: string
  width: number
  height: number
}
const ImageWithCaption = ({
  imgSrc,
  imgAlt,
  width,
  height,
}: ImageWithCaptionProps) => {
  const CAPTION = 'pch.vector from Freepik'
  return (
    <Container>
      <Image sx={{ width, height }} src={imgSrc} alt={imgAlt} />
      <Caption variant="caption">{CAPTION}</Caption>
    </Container>
  )
}

export default ImageWithCaption
