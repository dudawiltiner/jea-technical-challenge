import React from 'react'
import Button from '@mui/material/Button'

interface AuxProps {
  children: React.ReactNode
}

export default function ButtonSubmit({ children }: AuxProps) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {children}
    </Button>
  )
}
