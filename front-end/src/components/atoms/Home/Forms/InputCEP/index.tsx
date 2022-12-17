import { TextField } from '@mui/material'
import React from 'react'

export default function InputCEP() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="cep"
      label="CEP"
      type="text"
      id="cep"
      autoComplete="current-password"
    />
  )
}
