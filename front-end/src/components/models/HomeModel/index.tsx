import { Container } from '@mui/material'
import { useAtom } from 'jotai'
import React from 'react'
import { openSnackSuccessCreate, openSnackSuccessEdit } from '../../../store'
import SnackbarPersonalized from '../../atoms/SnackbarPersonalized'
import CreationFAB from '../../molecules/CreationFAB'
import CreateProjectForms from '../../organisms/Home/CreateProjectForms'
import EditProjectForms from '../../organisms/Home/EditProjectForms'
import Hero from '../../organisms/Home/Hero'
import ProjectsContainer from '../../organisms/Home/ProjectsContainer'
import MenuPage from '../../organisms/Menu/MenuPage'

export default function HomeModel() {
  const [openCreate, setOpenCreate] = useAtom(openSnackSuccessCreate)
  const [openEdit, setOpenEdit] = useAtom(openSnackSuccessEdit)

  return (
    <Container sx={{ mt: 10 }}>
      <MenuPage />
      <Hero />
      <ProjectsContainer />
      <CreateProjectForms />
      <EditProjectForms />
      <CreationFAB />
      <SnackbarPersonalized type={"success"} open={openCreate} handleClose={() => setOpenCreate(false)} >
        Projeto criado com sucesso!
      </SnackbarPersonalized>
      <SnackbarPersonalized type={"success"} open={openEdit} handleClose={() => setOpenEdit(false)} >
        Projeto editado com sucesso!
      </SnackbarPersonalized>
    </Container>
  )
}
