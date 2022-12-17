import React from 'react'
import Link from '@mui/material/Link'

interface AuxProps {
  children: React.ReactNode
}

export default function LinkForm({ children }: AuxProps) {
  return (
    <Link href="#" variant="body2">
      {children}
    </Link>
  )
}
