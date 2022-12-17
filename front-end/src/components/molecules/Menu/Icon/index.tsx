import React from 'react'
import IconMenu from '../../../atoms/Menu/IconMenu'
import MenuIcon from '@mui/icons-material/Menu'

interface IconProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
}

export default function Icon({ handleOpenNavMenu }: IconProps) {
  return (
    <IconMenu handleOpenNavMenu={handleOpenNavMenu}>
      <MenuIcon />
    </IconMenu>
  )
}
