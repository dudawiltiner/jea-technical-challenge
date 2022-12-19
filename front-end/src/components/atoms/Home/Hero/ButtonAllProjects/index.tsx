import React from 'react'
import Button from '@mui/material/Button'
import { FilterAlt } from '@mui/icons-material'

interface ButtonAllProjectsProps {
  children: React.ReactNode
  onClick: () => void
}

export default function ButtonAllProjects({
  children,
  onClick
}: ButtonAllProjectsProps) {
  return (
    <Button
      onClick={onClick}
      startIcon={<FilterAlt />}
      color="primary"
      variant="outlined"
    >
      {children}
    </Button>
  )
}
