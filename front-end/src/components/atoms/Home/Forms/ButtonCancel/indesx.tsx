import React from 'react'
import Button from '@mui/material/Button'

interface ButtonCancelProps {
  children: React.ReactNode
  handleClose: () => void
}

export default function ButtonCancel({
  children,
  handleClose
}: ButtonCancelProps) {
  return (
    <Button onClick={handleClose} autoFocus>
      {children}
    </Button>
  )
}
