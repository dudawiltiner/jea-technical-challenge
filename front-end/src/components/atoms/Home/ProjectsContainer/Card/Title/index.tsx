import { Typography } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function Title({ children }: AuxProps) {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {children}
    </Typography>
  )
}
