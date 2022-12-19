import { TextField } from '@mui/material'
import React from 'react'

export default function InputCost({ ...props }) {
  return (
    <TextField
      sx={{ mt: 0 }}
      margin="normal"
      required
      fullWidth
      id="cost"
      label="Custo"
      name="cost"
      autoComplete="cost"
      type="number"
      autoFocus
      {...props}
    />
  )
}
