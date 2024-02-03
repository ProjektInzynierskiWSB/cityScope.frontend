import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useModuleTranslation } from 'modules/list/utils'
import { Loader } from 'shared/components'
import { listApi } from 'shared/store/api'
import ItemHeader from '../../components/ItemHeader'
import { Container, UserContainer } from './Item.styles'

const Item = () => {
  const { t } = useModuleTranslation()
  const { id } = useParams()
  const { data } = listApi.useGetAnnouncementQuery({
    id: parseInt(id || '1'),
  })
  const [isUserVisible, setIsUserVisible] = useState(false)

  return (
    <Container>
      {data ? (
        <>
          <ItemHeader
            isUserVisible={isUserVisible}
            setIsUserVisible={setIsUserVisible}
            {...data.data}
          />
          {isUserVisible && (
            <UserContainer>
              <Typography variant="h6">
                {t('announcement.contactData')}
              </Typography>
              <Typography variant="h6">
                {t('announcement.name') + data.data.userName}
              </Typography>
              <Typography variant="h6">
                {t('announcement.email') + data.data.userEmail}
              </Typography>
            </UserContainer>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Container>
  )
}

export default Item
