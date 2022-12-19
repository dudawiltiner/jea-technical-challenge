import { MenuItem, Typography } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
  handleClose: () => void
}

export default function Item({ children, handleClose }: AuxProps) {
  return (
    <MenuItem onClick={handleClose}>
      <Typography textAlign="center">{children}</Typography>
    </MenuItem>
  )
}
