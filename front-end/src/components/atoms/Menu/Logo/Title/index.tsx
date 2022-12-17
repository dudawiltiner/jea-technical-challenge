import { Typography } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function Title({ children }: AuxProps) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      { children }
    </Typography>
  )
}
