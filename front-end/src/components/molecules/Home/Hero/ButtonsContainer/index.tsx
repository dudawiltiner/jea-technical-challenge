import React from 'react'
import Stack from '@mui/material/Stack'
import {
  ButtonAllProjects,
  ButtonMyProjects
} from '../../../../atoms/Home/Hero'

export default function ButtonsContainer() {
  return (
    <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
      <ButtonMyProjects>Ver apenas os meus projetos</ButtonMyProjects>
      <ButtonAllProjects>Ver todos os projetos</ButtonAllProjects>
    </Stack>
  )
}
