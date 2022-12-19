import { Cookie } from '@mui/icons-material'
import React from 'react'

interface LogoProps {
  isMobile: boolean
}

export default function Image({ isMobile }: LogoProps) {
  return (
    <Cookie
      sx={{
        xs: `${isMobile ? 'flex' : 'none'}`,
        md: `${isMobile ? 'none' : 'flex'}`,
        mr: 1
      }}
    />
  )
}
