import React from 'react'
import Typography from '@mui/material/Typography'

interface AuxProps {
  children: React.ReactNode
}

export default function Title({ children }: AuxProps) {
  return (
    <Typography component="h1" variant="h5">
      {children}
    </Typography>
  )
}
