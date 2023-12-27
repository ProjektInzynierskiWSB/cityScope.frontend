import { useParams } from 'react-router-dom'
import ItemHeader from '../../components/ItemHeader'
import { mockItems } from '../ItemList/ItemList.mock'
import { Container } from './Item.styles'

const Item = () => {
  const { id } = useParams()
  const mockItem = mockItems[3]
  return (
    <Container>
      <ItemHeader {...mockItem} />
    </Container>
  )
}

export default Item
