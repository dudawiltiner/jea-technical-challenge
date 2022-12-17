import React from 'react'
import Typography from '@mui/material/Typography'

interface AuxProps {
  children: React.ReactNode
}

export default function Text({ children }: AuxProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {children}
    </Typography>
  )
}
