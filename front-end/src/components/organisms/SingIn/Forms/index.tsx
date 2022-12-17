import React from 'react'
import Box from '@mui/material/Box'
import { FieldsContainer } from '../../../molecules/SignIn/Forms'
import ButtonAndLink from '../../../molecules/SignIn/Forms/ButtonAndLink'

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
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <FieldsContainer />
      <ButtonAndLink />
    </Box>
  )
}
