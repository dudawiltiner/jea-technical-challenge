import { DialogActions } from '@mui/material'
import { useAtom } from 'jotai'
import React from 'react'
import { openEditioModal } from '../../../../../store'
import { ButtonCancel, ButtonSave } from '../../../../atoms/Home/Forms'

export default function ButtonsContainer() {
  const [, setOpen] = useAtom(openEditioModal)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <DialogActions>
      <ButtonCancel handleClose={handleClose}>Cancel</ButtonCancel>
      <ButtonSave>Salvar</ButtonSave>
    </DialogActions>
  )
}
