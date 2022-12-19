import React from 'react'
import TextField from '@mui/material/TextField'

export default function InputName({ ...props }) {
  return (
    <TextField
      autoComplete="given-name"
      name="name"
      required
      fullWidth
      id="name"
      label="Nome"
      autoFocus
      {...props}
    />
  )
}
