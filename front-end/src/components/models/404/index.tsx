import { Container } from '@mui/system'
import React from 'react'
import Error from '../../organisms/404'

export default function ErrorModel() {
  return (
    <Container component="main" maxWidth="xs">
      <Error />
    </Container>
  )
}
