import React from 'react'
import Button from '@mui/material/Button'

interface ButtonSaveProps {
  children: React.ReactNode
  handleClose: () => void
}

export default function ButtonSave({ children, handleClose }: ButtonSaveProps) {
  return (
    <Button onClick={handleClose} color="secondary" variant="contained">
      {children}
    </Button>
  )
}
