import React from 'react'
import * as S from './style'
import FloatButton from '../../atoms/CreationFAB/FloatButton'
import { useAtom } from 'jotai'
import { openCreatioModal } from '../../../store'

export default function CreationFAB() {
  const [, setOpen] = useAtom(openCreatioModal)

  function handleClickOpen() {
    setOpen(true)
  }
  return (
    <S.Container>
      <FloatButton handleClickOpen={handleClickOpen} />
    </S.Container>
  )
}
