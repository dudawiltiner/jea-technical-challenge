import React from 'react'
import { Add } from '@mui/icons-material'
import { Fab } from '@mui/material'

interface FloatButtonProps {
  handleClickOpen(): void
}

export default function FloatButton({ handleClickOpen }: FloatButtonProps) {
  return (
    <Fab onClick={handleClickOpen} color="secondary" aria-label="add">
      <Add />
    </Fab>
  )
}
