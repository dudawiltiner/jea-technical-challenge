import React from 'react'
import Box from '@mui/material/Box'
import { ButtonAndLink, FieldsContainer } from '../../../molecules/SignUp/Forms'

export default function Forms() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <FieldsContainer />
      <ButtonAndLink />
    </Box>
  )
}
