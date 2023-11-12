import { Button, Typography } from '@mui/material'
import User from '../User'
import { ItemProps } from '../../views/ItemList/ItemList.types'
import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  Row,
} from './ItemHeader.styles'

const ItemHeader = ({
  description,
  productName,
  img,
  userImg,
  id,
  user,
}: ItemProps) => {
  return (
    <>
      <Typography variant="h4" paragraph>
        {productName + '/' + id}
      </Typography>
      <Container>
        <ImageContainer>
          <Image src={img} alt="ItemsImage" />
        </ImageContainer>
        <ContentContainer>
          <Row>
            <User userImg={userImg} user={user} />
            <Typography variant="body1">oceny</Typography>
          </Row>
          <Typography variant="body1">{description}</Typography>
          <Button variant="contained">Zamów</Button>
        </ContentContainer>
      </Container>
    </>
  )
}

export default ItemHeader
