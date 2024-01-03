import { NavigateToAnnouncementFormComponent } from 'modules/list/components'
import ListElement from '../../components/ListElement'
import { mockItems } from './ItemList.mock'
import { Container } from './ItemList.styles'

const ItemList = () => {
  return (
    <Container>
      <NavigateToAnnouncementFormComponent />
      {mockItems.map(item => (
        <ListElement key={item.productName} {...item} />
      ))}
    </Container>
  )
}

export default ItemList
