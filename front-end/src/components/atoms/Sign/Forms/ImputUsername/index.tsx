import React from 'react'
import TextField from '@mui/material/TextField'

export default function InputUsername() {
  return (
    <TextField
      required
      fullWidth
      id="username"
      label="Usuário"
      name="username"
      autoComplete="username"
    />
  )
}
