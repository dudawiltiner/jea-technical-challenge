import { Menu } from '@mui/material'
import React from 'react'
import Item from '../../../atoms/Menu/PagesAndSettings/Item'

interface PagesProps {
  anchorElNav: HTMLElement | null
  handleCloseNavMenu: () => void
}

const pages = ['Projetos', 'Sair']

export default function Pages({ anchorElNav, handleCloseNavMenu }: PagesProps) {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' }
      }}
    >
      {pages.map((page) => (
        <Item handleClose={handleCloseNavMenu} key={page}>
          {page}
        </Item>
      ))}
    </Menu>
  )
}
