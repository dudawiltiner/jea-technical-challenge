import React from 'react'
import TextField from '@mui/material/TextField'

export default function InputName() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      label="Usuário"
      name="name"
      autoComplete="name"
      autoFocus
    />
  )
}
