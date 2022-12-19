import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ButtonsContainer, Text } from '../../../molecules/Home/Hero'

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        <Text />
        <ButtonsContainer />
      </Container>
    </Box>
  )
}
