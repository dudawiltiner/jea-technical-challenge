import { ListItem, ListItemAvatar } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
  text: React.ReactNode
}

export default function AvatarItem({ children, text }: AuxProps) {
  return (
    <ListItem sx={{ ml: 0 }}>
      <ListItemAvatar>{children}</ListItemAvatar>
      {text}
    </ListItem>
  )
}
