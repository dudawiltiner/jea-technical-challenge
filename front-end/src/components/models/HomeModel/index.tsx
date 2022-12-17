import { Container } from '@mui/material'
import React from 'react'
import CreationFAB from '../../molecules/CreationFAB'
import CreateProjectForms from '../../organisms/Home/CreateProjectForms'
import EditProjectForms from '../../organisms/Home/EditProjectForms'
import Hero from '../../organisms/Home/Hero'
import ProjectsContainer from '../../organisms/Home/ProjectsContainer'
import MenuPage from '../../organisms/Menu/MenuPage'

export default function HomeModel() {
  return (
    <Container sx={{ mt: 10 }}>
      <MenuPage />
      <Hero />
      <ProjectsContainer />
      <CreateProjectForms />
      <EditProjectForms />
      <CreationFAB />
    </Container>
  )
}
