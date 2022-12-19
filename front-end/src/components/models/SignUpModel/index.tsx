import { Box, Container } from '@mui/material'
import React from 'react'
import MenuPage from '../../organisms/Menu/MenuPage'
import Forms from '../../organisms/SignUp/Forms'
import Header from '../../organisms/SignUp/Header'

export default function SignUpModel() {
  return (
    <Container component="main" maxWidth="xs">
      <MenuPage />
      <Box
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Header />
        <Forms />
      </Box>
    </Container>
  )
}
