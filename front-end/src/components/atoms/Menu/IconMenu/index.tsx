import { IconButton } from '@mui/material'
import React from 'react'

interface AuxProps {
  children: React.ReactNode
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
}

export default function IconMenu({ children, handleOpenNavMenu }: AuxProps) {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      { children }
    </IconButton>
  )
}
