import React from 'react'
import Button from '@mui/material/Button'
import { FilterAlt } from '@mui/icons-material'

interface ButtonAllProjectsProps {
  children: React.ReactNode
}

export default function ButtonAllProjects({
  children
}: ButtonAllProjectsProps) {
  return (
    <Button startIcon={<FilterAlt />} color="secondary" variant="contained">
      {children}
    </Button>
  )
}
