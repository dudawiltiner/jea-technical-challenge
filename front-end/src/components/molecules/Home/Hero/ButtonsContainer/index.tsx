import React from 'react'
import Stack from '@mui/material/Stack'
import {
  ButtonAllProjects,
  ButtonMyProjects
} from '../../../../atoms/Home/Hero'
import { useAtom } from 'jotai'
import { showAt } from '../../../../../store'

export default function ButtonsContainer() {
  const [, setShow] = useAtom(showAt)

  return (
    <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
      <ButtonMyProjects onClick={() => setShow('myprojects')}>
        Ver apenas os meus projetos
      </ButtonMyProjects>
      <ButtonAllProjects onClick={() => setShow('allprojects')}>
        Ver todos os projetos
      </ButtonAllProjects>
    </Stack>
  )
}
