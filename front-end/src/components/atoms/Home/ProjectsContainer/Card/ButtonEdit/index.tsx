import { Button } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function ButtonEdit({ children }: AuxProps) {
  return <Button size="small">{children}</Button>
}
