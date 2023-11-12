import { Avatar, Typography } from '@mui/material'
import { UserContainer } from './User.styles'

export interface UserProps {
  userImg: string | null
  user: string
}
const User = ({ userImg, user }: UserProps) => {
  return (
    <UserContainer>
      <Avatar src={userImg ?? undefined} />
      <Typography variant="button">{user}</Typography>
    </UserContainer>
  )
}

export default User
