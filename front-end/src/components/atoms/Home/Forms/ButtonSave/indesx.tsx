import React from 'react'
import Button from '@mui/material/Button'

interface ButtonSaveProps {
  children: React.ReactNode
}

export default function ButtonSave({ children }: ButtonSaveProps) {
  return (
    <Button type="submit" color="secondary" variant="contained">
      {children}
    </Button>
  )
}
