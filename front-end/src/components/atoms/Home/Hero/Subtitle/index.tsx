import React from 'react'
import Typography from '@mui/material/Typography'

interface AuxProps {
  children: React.ReactNode
}

export default function Subtitle({ children }: AuxProps) {
  return (
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      {children}
    </Typography>
  )
}
