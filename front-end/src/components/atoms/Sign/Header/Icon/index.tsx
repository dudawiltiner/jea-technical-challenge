import React from 'react'
import Avatar from '@mui/material/Avatar'

interface AuxProps {
  children: React.ReactNode
}

export const Icon = ({ children }: AuxProps) => {
  return (
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
      {children}
    </Avatar>
  )
}
