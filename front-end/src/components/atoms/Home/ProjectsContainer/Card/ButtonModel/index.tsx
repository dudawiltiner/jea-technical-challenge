import { IconButton } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function ButtonModel({ children, onClick }: AuxProps) {
  return (
    <IconButton size="small" onClick={onClick}>
      {children}
    </IconButton>
  )
}
