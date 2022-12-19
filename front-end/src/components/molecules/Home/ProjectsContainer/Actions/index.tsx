import { Delete, Edit } from '@mui/icons-material'
import { Box, CardActions } from '@mui/material'
import { useAtom } from 'jotai'
import React from 'react'
import { useCookies } from 'react-cookie'
import { fetchDeleteProject } from '../../../../../hooks/use-delete-project'
import { fetchUpdateProject } from '../../../../../hooks/use-update-project'
import {
  openEditioModal,
  Project,
  projectAt,
  projectsList
} from '../../../../../store'
import {
  ButtonModel,
  CheckProject
} from '../../../../atoms/Home/ProjectsContainer/Card'

interface ActionsProps {
  done: boolean
  data: Project
}

export default function Actions({ done, data }: ActionsProps) {
  const [, setOpen] = useAtom(openEditioModal)
  const [, setProject] = useAtom(projectAt)
  const [cookies] = useCookies()
  const [projects, setProjects] = useAtom(projectsList)

  function updateProject() {
    let list = projects.filter((el) => el.id !== data.id)
    list.push({ ...data, done: !data.done })
    list.sort((a, b) => a.id - b.id)
    setProjects([...list])

    fetchUpdateProject(
      {
        title: data.title,
        zip_code: data.zip_code,
        cost: data.cost,
        deadline: data.deadline
      },
      data.id,
      data.username,
      !done,
      cookies.token
    )
  }

  function editProject() {
    setProject({ ...data })
    setOpen(true)
  }

  function deleteProject() {
    let list = projects.filter((el) => el.id !== data.id)
    setProjects([...list])

    fetchDeleteProject(data.id.toString(), cookies.token)
  }

  return (
    <CardActions>
      {cookies.username === data.username ? (
        <>
          <CheckProject onClick={() => updateProject()} checked={done} />
          <ButtonModel onClick={() => editProject()}>
            <Edit color="primary" />
          </ButtonModel>
          <ButtonModel onClick={() => deleteProject()}>
            <Delete />
          </ButtonModel>
        </>
      ) : (
        <Box height={42} />
      )}
    </CardActions>
  )
}
