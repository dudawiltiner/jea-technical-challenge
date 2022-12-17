import React from 'react'
import * as S from './style'
import FloatButton from '../../atoms/CreationFAB/FloatButton'

export default function CreationFAB() {
  function handleClickOpen() {}
  return (
    <S.Container>
      <FloatButton handleClickOpen={handleClickOpen} />
    </S.Container>
  )
}
