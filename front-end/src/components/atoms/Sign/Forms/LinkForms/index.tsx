import React from 'react'
import Link from '@mui/material/Link'
import { Link as LinkReact } from 'react-router-dom'
interface AuxProps {
  children: React.ReactNode
  link: string
}

export default function LinkForm({ children, link }: AuxProps) {
  return (
    <LinkReact to={link}>
      <Link variant="body2">{children}</Link>
    </LinkReact>
  )
}
