import React from 'react'
import { Dialog, DialogContent } from '@mui/material'
import {
  ButtonsContainer,
  FieldsContainer,
  TitleForms
} from '../../../molecules/Home/CreateProjectForms'

export default function CreateProjectForms() {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      onClose={handleClose}
    >
      <TitleForms />
      <DialogContent dividers>
        <FieldsContainer />
      </DialogContent>
      <ButtonsContainer />
    </Dialog>
  )
}
