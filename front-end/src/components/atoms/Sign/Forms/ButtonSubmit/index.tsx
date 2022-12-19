import React from 'react'
import Button from '@mui/material/Button'
import { CircularProgress } from '@mui/material'

interface AuxProps {
  children: React.ReactNode
  isLoading: boolean
}

export default function ButtonSubmit({ children, isLoading }: AuxProps) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {isLoading && (
        <CircularProgress color="secondary" size={20} sx={{ mr: 2 }} />
      )}
      {children}
    </Button>
  )
}
