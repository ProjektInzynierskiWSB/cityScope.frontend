import Chair from 'assets/listElement/chair.jpg'
import Gift from 'assets/listElement/gift.jpg'
import UserImg from 'assets/listElement/userMock.jpg'
import { ItemProps } from './ItemList.types'

export const mockItems: ItemProps[] = [
  {
    description:
      'Mauris convallis, massa aliquam feugiat faucibus, sapien augue faucibus ante, non iaculis mauris velit eget ipsum. Nam nunc massa, venenatis ac velit elementum, tempus aliquet augue. Sed ac sollicitudin ligula. Pellentesque turpis magna, vestibulum eget orci et, euismod laoreet felis. Phasellus volutpat ornare sem, sed egestas ante. Suspendisse rutrum ornare hendrerit. Proin pretium finibus vehicula. Pellentesque eget lacinia nisl.Mauris convallis, massa aliquam feugiat faucibus, sapien augue faucibus ante, non iaculis mauris velit eget ipsum. Nam nunc massag, elementum tempus aliquet augue. Sedcdcddee ac sollicitudin ligula. Pellentesque turpis magna, vestibulum eget orci et, euismod laoreet felis. Phasellus volutpat ornare sem, sed egestas ante. Suspendisse rutrum ornare hendrerit. Proin pretium finibus vehicula. Pellentesque eget lacinia nisl.Mauris convallis, massa aliquam feugiat faucibus, sapien augue faucibus ante, non iaculis mauris velit eget ipsum. Nam nunc massagg, venenatis ac velit elementum, tempus aliquet augue. Sed ac sollicitudin ligula. Pellentesque turpis magna, vestibulum eget orci et, euismod laoreet felis. Phasellus volutpat ornare sem, sed egestas ante. Suspendisse rutrum ornare hendrerit. Proin pretium finibus vehicula. Pellentesque eget lacinia nisl.',
    id: 1234,
    img: Chair,
    productName: 'Przykładowa nazwa',
    user: 'Eustachy Nowak',
    userImg: UserImg,
  },
  {
    description:
      'Nulla blandit libero sit amet nisl mattis, non aliquam nisi varius. Pellentesque elementum arcu quis nibh feugiat suscipit. Nullam eget tortor id lectus ornare posuere ac id leo. Cras et ipsum ac augue egestas facilisis.',
    id: 1236,
    img: Gift,
    productName: 'Itemek',
    user: 'Gienia Staw',
    userImg: null,
  },
  {
    description:
      'Nam dignissim consectetur posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat et quam non porta. Quisque fermentum nibh risus, lacinia tempor dolor finibus viverra. Donec rhoncus aliquam dolor at semper. Sed pretium, eros eget dignissim tincidunt, tellus orci iaculis ex, quis tristique ligula tortor eget ipsum. Maecenas mattis odio in turpis porttitor consectetur. ',
    id: 1345,
    img: Chair,
    productName: 'Tanio!!! Okazja!!',
    user: 'Aniela Kowalska',
    userImg: UserImg,
  },
  {
    description:
      'Pellentesque tincidunt velit nec mauris lacinia, rhoncus volutpat massa commodo.',
    id: 1543,
    img: Gift,
    productName: 'Weźcie to ja tego nei chce',
    user: 'Hubert Guzik',
    userImg: UserImg,
  },
  {
    description:
      'orem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lorem vel turpis consectetur porttitor. Fusce lacinia malesuada justo quis posuere. Fusce fringilla ipsum et sem malesuada malesuada. Duis mattis at quam sed facilisis. Nunc nisl enim, molestie at lobortis vitae, malesuada nec magna. Sed ac auctor metus. ',
    id: 6543,
    img: Chair,
    productName: 'Wkrętarko Wiertarka',
    user: 'Stanisław Niemczyk',
    userImg: UserImg,
  },
]
