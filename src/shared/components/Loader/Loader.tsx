import { HTMLAttributes } from 'react'
import { CircularProgress } from '@mui/material'
import { DEFAULT_SIZE } from './Loader.consts'
import { Container } from './Loader.styles'

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const Loader = ({ size = DEFAULT_SIZE, ...props }: LoaderProps) => (
  <Container {...props}>
    <CircularProgress size={size} />
  </Container>
)

export default Loader
