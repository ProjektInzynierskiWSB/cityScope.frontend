import { useState } from 'react'
import { Pagination } from '@mui/material'
import { NavigateToAnnouncementFormComponent } from 'modules/list/components'
import { Loader } from 'shared/components'
import { listApi } from 'shared/store/api'
import ListElement from '../../components/ListElement'
import { Container } from './ItemList.styles'

const ItemList = () => {
  const [page, setPage] = useState(1)
  const { isLoading, data } = listApi.useGetAnnouncementsQuery({
    page: page,
    pageSize: 10,
  })

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const List = () => (
    <>
      <Pagination
        count={data?.data?.allCount ? Math.ceil(data.data.allCount / 10) : 1}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
      {data?.data.announcements.map(item => (
        <ListElement key={item.title} {...item} />
      ))}
      <Pagination
        count={data?.data?.allCount ? Math.ceil(data.data.allCount / 10) : 1}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </>
  )

  return (
    <Container>
      <NavigateToAnnouncementFormComponent />
      {isLoading ? <Loader /> : List()}
    </Container>
  )
}

export default ItemList
