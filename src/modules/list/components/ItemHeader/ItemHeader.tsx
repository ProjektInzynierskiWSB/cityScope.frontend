import { Button, Typography } from '@mui/material'
import { useModuleTranslation } from 'modules/list/utils'
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
  const { t } = useModuleTranslation()
  return (
    <>
      <Typography variant="h4" paragraph>
        {productName + id}
      </Typography>
      <Container>
        <ImageContainer>
          <Image src={img} alt="ItemsImage" />
        </ImageContainer>
        <ContentContainer>
          <Row>
            <User userImg={userImg} user={user} />
            <Typography variant="body1">{t('announcement.grades')}</Typography>
          </Row>
          <Typography variant="body1">{description}</Typography>
          <Button variant="contained">{t('announcement.order')}</Button>
        </ContentContainer>
      </Container>
    </>
  )
}

export default ItemHeader
