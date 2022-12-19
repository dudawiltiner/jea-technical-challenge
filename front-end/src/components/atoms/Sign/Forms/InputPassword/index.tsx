import React from 'react'
import TextField from '@mui/material/TextField'

export default function InputPassword({ ...props }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Senha"
      type="password"
      id="password"
      autoComplete="current-password"
      {...props}
    />
  )
}
