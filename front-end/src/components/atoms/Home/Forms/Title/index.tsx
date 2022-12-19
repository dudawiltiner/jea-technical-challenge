import { DialogTitle } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function Title({ children }: AuxProps) {
  return <DialogTitle>{children}</DialogTitle>
}
