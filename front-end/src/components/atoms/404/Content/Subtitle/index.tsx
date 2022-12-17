import React from 'react'
import { Typography } from '@mui/material'

interface AuxProps {
  children: React.ReactNode
}

export default function Subtitle({ children }: AuxProps) {
  return (
    <Typography align="center" variant="h6">
      {children}
    </Typography>
  )
}
