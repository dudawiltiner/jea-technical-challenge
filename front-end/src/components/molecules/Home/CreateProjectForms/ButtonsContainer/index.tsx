import { DialogActions } from '@mui/material'
import React from 'react'
import { useAtom } from 'jotai'
import { ButtonCancel, ButtonSave } from '../../../../atoms/Home/Forms'
import { openCreatioModal } from '../../../../../store'

export default function ButtonsContainer() {
  const [, setOpen] = useAtom(openCreatioModal)

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
