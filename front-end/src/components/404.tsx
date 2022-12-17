import React from 'react'
import Box from '@mui/material/Box'
import { Button, Container, Typography } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'

export default function Error() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography align="center" variant="h6">
          A página que você está procurando não existe ou está em manutenção
        </Typography>
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          endIcon={<ArrowCircleRight />}
        >
          Voltar para Home
        </Button>
      </Box>
    </Container>
  )
}
