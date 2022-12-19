import { Typography } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
  isMobile: boolean
}

export default function Title({ children, isMobile }: AuxProps) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: {
          xs: `${isMobile ? 'flex' : 'none'}`,
          md: `${isMobile ? 'none' : 'flex'}`
        },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {children}
    </Typography>
  )
}
