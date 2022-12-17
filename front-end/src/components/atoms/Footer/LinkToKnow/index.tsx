import React from 'react'
import Link from '@mui/material/Link'

interface LinkToKnowProps {
  link: string
  children: React.ReactNode
}

export default function LinkToKnow({ link, children }: LinkToKnowProps) {
  return (
    <Link color="inherit" href={link}>
      {children}
    </Link>
  )
}
