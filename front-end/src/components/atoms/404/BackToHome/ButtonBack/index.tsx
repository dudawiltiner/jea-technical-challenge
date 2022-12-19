import React from 'react'
import { Button } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'

interface AuxProps {
  children: React.ReactNode
}

export default function ButtonBack({ children }: AuxProps) {
  return (
    <Button sx={{ mt: 4 }} variant="contained" endIcon={<ArrowCircleRight />}>
      {children}
    </Button>
  )
}
