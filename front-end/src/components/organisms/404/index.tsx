import React from 'react'
import Box from '@mui/material/Box'
import TextContainer from '../../molecules/404/TextContainer'
import ButtonBackToHome from '../../molecules/404/ButtonBackToHome'

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <TextContainer />
      <ButtonBackToHome />
    </Box>
  )
}
