import React from 'react'
import { Typography } from '@mui/material'

interface AuxProps {
  children: React.ReactNode
}

export default function Title({ children }: AuxProps) {
  return <Typography variant="h1">{children}</Typography>
}
