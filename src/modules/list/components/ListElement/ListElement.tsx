import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { paths } from 'config'
import { Announcement } from 'shared/store/api/list'
import { useModuleTranslation } from '../../utils'
import {
  Container,
  ImageContainer,
  ContentContainer,
  Image,
  DescriptionContainer,
  StyledButton,
} from './ListElement.styles'

const ListElement = ({
  createdDate,
  description,
  id,
  imageUrl,
  price,
  title,
}: Announcement) => {
  const { t } = useModuleTranslation()
  const navigate = useNavigate()
  const onElementCLick = (id: number) => {
    navigate(`${paths.list}/${id}`)
  }
  const createdDateToShow = dayjs(createdDate).format('DD-MM-YYYY')
  return (
    <Container>
      <ImageContainer>
        {imageUrl && <Image src={imageUrl} alt="ItemsImage" />}
      </ImageContainer>
      <ContentContainer>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">
          {`${t('added')}: ${createdDateToShow}`}
        </Typography>
        <Typography variant="h5">{`${price} ${t('currency')}`}</Typography>
        <DescriptionContainer>
          <Typography variant="body1">{description}</Typography>
        </DescriptionContainer>

        <StyledButton onClick={() => onElementCLick(id)} variant="contained">
          {t('seeAnnouncement')}
        </StyledButton>
      </ContentContainer>
    </Container>
  )
}

export default ListElement
