import React, { useEffect, useState } from 'react'
import { Box, Dialog, DialogContent } from '@mui/material'
import {
  ButtonsContainer,
  FieldsContainer,
  TitleForms
} from '../../../molecules/Home/EditProjectForms'
import { useAtom } from 'jotai'
import {
  openEditioModal,
  openSnackSuccessEdit,
  projectAt,
  projectsList
} from '../../../../store'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { ProjectInput } from '../../../../hooks/use-create-project/type'
import { useUpdateProject } from '../../../../hooks/use-update-project'
import { fetchFindCep } from '../../../../services/api-viacep'
import SnackbarPersonalized from '../../../atoms/SnackbarPersonalized'

export default function EditProjectForms() {
  const [open, setOpen] = useAtom(openEditioModal)
  const [project] = useAtom(projectAt)
  const [projects, setProjects] = useAtom(projectsList)
  const [dataInput, setDataInput] = useState<ProjectInput>({
    title: '',
    zip_code: '',
    cost: 0,
    deadline: dayjs(new Date()).date.toString()
  })
  const [openSnackError, setOpenSnackError] = useState(false)
  const [, setOpenEdit] = useAtom(openSnackSuccessEdit)
  const [showLoading, setShowLoading] = useState(false)
  const [cookies] = useCookies()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      title: project.title,
      zip_code: project.zip_code,
      cost: project.cost,
      deadline: dayjs(new Date(project.deadline))
    }
  })

  useEffect(() => {
    let defaults = {
      title: project.title,
      zip_code: project.zip_code,
      cost: project.cost,
      deadline: dayjs(new Date(project.deadline))
    }
    reset(defaults)
  }, [project, reset])

  const onSubmit = async (data: any) => {
    setShowLoading(true)
    try {
      const response = await fetchFindCep(data.zip_code)

      setDataInput({
        ...data,
        deadline: data.deadline.$d,
        cost: parseInt(data.cost)
      })
      let list = projects.filter((el) => el.id !== project.id)
      list.push({
        ...data,
        id: project.id,
        done: project.done,
        username: project.username,
        deadline: data.deadline.$d,
        cost: parseInt(data.cost),
        city: `${response.city}/${response.state}`
      })
      list.sort((a, b) => a.id - b.id)
      setProjects([...list])

      setOpen(false)
    } catch {
      setOpenSnackError(true)
    }
  }

  const { data, isLoading, error } = useUpdateProject(
    dataInput,
    project.id,
    project.done,
    cookies.username,
    cookies.token
  )

  useEffect(() => {
    if (data && data?.updateProject.id > 0 && !isLoading) {
      setOpenEdit(true)
    }

    if (error && !isLoading && showLoading) {
      setOpenSnackError(true)
    }

    if (!isLoading) {
      setShowLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      onClose={() => setOpen(false)}
    >
      <TitleForms />
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <FieldsContainer control={control} errors={errors} />
        </DialogContent>
        <ButtonsContainer />
      </Box>
      <SnackbarPersonalized
        type={'error'}
        open={openSnackError}
        handleClose={() => setOpenSnackError(false)}
      >
        Algo de errado aconteceu. Confira se os dados alterados.
      </SnackbarPersonalized>
    </Dialog>
  )
}
