import { DialogActions } from '@mui/material'
import React from 'react'
import { ButtonCancel, ButtonSave } from '../../../../atoms/Home/Forms'

export default function ButtonsContainer() {
  const [, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <DialogActions>
      <ButtonCancel handleClose={handleClose}>Cancel</ButtonCancel>
      <ButtonSave handleClose={handleClose}>Salvar</ButtonSave>
    </DialogActions>
  )
}
