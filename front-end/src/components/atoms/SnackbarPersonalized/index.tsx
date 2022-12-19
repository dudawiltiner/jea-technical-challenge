import { Alert, AlertColor, Snackbar } from '@mui/material'
import React from 'react'

interface SnackbarPersonalizedProps {
  open: boolean,
  handleClose: () => void
  type: AlertColor | undefined,
  children: React.ReactNode

}

export default function SnackbarPersonalized({ open, handleClose, type, children }: SnackbarPersonalizedProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        { children }
      </Alert>
    </Snackbar>
  )
}
