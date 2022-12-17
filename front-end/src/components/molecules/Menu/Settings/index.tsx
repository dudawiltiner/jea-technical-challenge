import { Menu } from '@mui/material'
import React from 'react'
import Item from '../../../atoms/Menu/PagesAndSettings/Item'

interface PagesProps {
  anchorElUser: HTMLElement | null
  handleCloseUserMenu: () => void
}

const settings = ['Perfil']

export default function Settings({ anchorElUser, handleCloseUserMenu }: PagesProps) {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <Item handleClose={handleCloseUserMenu} key={setting}>
          {setting}
        </Item>
      ))}
    </Menu>
  )
}
