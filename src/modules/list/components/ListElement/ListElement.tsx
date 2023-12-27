import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { paths } from 'config'
import { useModuleTranslation } from '../../utils'
import User from '../User'
import { ItemProps } from '../../views/ItemList/ItemList.types'
import {
  Container,
  ImageContainer,
  ContentContainer,
  Image,
  DescriptionContainer,
  StyledButton,
} from './ListElement.styles'

const ListElement = ({
  description,
  productName,
  img,
  userImg,
  id,
  user,
}: ItemProps) => {
  const { t } = useModuleTranslation()
  const navigate = useNavigate()
  const onElementCLick = (id: number) => {
    navigate(`${paths.list}/${id}`)
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={img} alt="ItemsImage" />
      </ImageContainer>
      <ContentContainer>
        <Typography variant="h4">{productName}</Typography>
        <User userImg={userImg} user={user} />
        <DescriptionContainer>
          <Typography variant="body1">{description}</Typography>
        </DescriptionContainer>
        <StyledButton onClick={() => onElementCLick(id)} variant="contained">
          {t('seeOffer')}
        </StyledButton>
      </ContentContainer>
    </Container>
  )
}

export default ListElement
