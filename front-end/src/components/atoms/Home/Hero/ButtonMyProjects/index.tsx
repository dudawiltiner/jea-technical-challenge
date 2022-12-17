import React from 'react'
import Button from '@mui/material/Button'
import { FilterAlt } from '@mui/icons-material'

interface ButtonMyProjectsProps {
  children: React.ReactNode
}

export default function ButtonMyProjects({ children }: ButtonMyProjectsProps) {
  return (
    <Button startIcon={<FilterAlt />} color="secondary" variant="contained">
      {children}
    </Button>
  )
}
