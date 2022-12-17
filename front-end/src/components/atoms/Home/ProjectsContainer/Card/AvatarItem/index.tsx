import { Avatar, ListItemAvatar } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
}

export default function AvatarItem({ children }: AuxProps) {
  return (
    <ListItemAvatar>
      <Avatar sx={{ width: 24, height: 24 }}>{children}</Avatar>
    </ListItemAvatar>
  )
}
