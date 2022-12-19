import { TextField } from '@mui/material'
import React from 'react'

export default function InputName({ ...props }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      label="Nome"
      name="name"
      autoComplete="name"
      autoFocus
      {...props}
    />
  )
}
