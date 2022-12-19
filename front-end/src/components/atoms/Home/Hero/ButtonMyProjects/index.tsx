import React from 'react'
import Button from '@mui/material/Button'
import { FilterAlt } from '@mui/icons-material'

interface ButtonMyProjectsProps {
  children: React.ReactNode
  onClick: () => void
}

export default function ButtonMyProjects({
  children,
  onClick
}: ButtonMyProjectsProps) {
  return (
    <Button
      onClick={onClick}
      startIcon={<FilterAlt />}
      color="secondary"
      variant="contained"
    >
      {children}
    </Button>
  )
}
