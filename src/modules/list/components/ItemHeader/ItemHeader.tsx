import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useModuleTranslation } from 'modules/list/utils'
import { Announcement, listApi } from 'shared/store/api/list'
import listStore from 'shared/store/list'
import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  OrderButton,
  ColoredText,
  Row,
} from './ItemHeader.styles'

export interface ItemHeaderProps extends Announcement {
  isUserVisible: boolean
  setIsUserVisible: Dispatch<SetStateAction<boolean>>
}
const ItemHeader = ({
  categoryId,
  isUserVisible,
  setIsUserVisible,
  description,
  title,
  imageUrl,
  createdDate,
  price,
}: ItemHeaderProps) => {
  const { t } = useModuleTranslation()
  const createdDateToShow = dayjs(createdDate).format('DD-MM-YYYY')
  const onOrderButtonClick = () => {
    setIsUserVisible(true)
  }
  const { isLoading } = listApi.useGetMainCategoriesQuery({})
  const mainCategories = useSelector(listStore.selectors.getMainCtegories)

  const getCategoryName = (): string => {
    if (isLoading) return ''
    const categoryName =
      mainCategories?.find(category => category.value === categoryId)?.key || ''
    return categoryName
  }
  return (
    <>
      <Typography variant="h4" paragraph>
        {title}
      </Typography>
      <Container>
        <ImageContainer>
          <Image src={imageUrl || undefined} alt="ItemsImage" />
        </ImageContainer>
        <ContentContainer>
          <Row>
            <ColoredText variant="body1">{`${t(
              'added'
            )}: ${createdDateToShow}`}</ColoredText>
            <ColoredText variant="body1">{getCategoryName()}</ColoredText>
          </Row>

          <Typography variant="body1">{description}</Typography>
          <Typography variant="h5">{`${price} ${t('currency')}`}</Typography>
          {!isUserVisible && (
            <OrderButton variant="contained" onClick={onOrderButtonClick}>
              {t('announcement.order')}
            </OrderButton>
          )}
        </ContentContainer>
      </Container>
    </>
  )
}

export default ItemHeader
