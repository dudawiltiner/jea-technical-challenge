import { ListItemText } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function TextItem({ children }: AuxProps) {
  return <ListItemText secondary={children} />
}
