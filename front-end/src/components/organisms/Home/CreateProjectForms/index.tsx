import React, { useEffect, useState } from 'react'
import { Box, Dialog, DialogContent } from '@mui/material'
import {
  ButtonsContainer,
  FieldsContainer,
  TitleForms
} from '../../../molecules/Home/CreateProjectForms'
import { useAtom } from 'jotai'
import { openCreatioModal, openSnackSuccessCreate, projectsList } from '../../../../store'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { useCreateProject } from '../../../../hooks/use-create-project'
import { ProjectInput } from '../../../../hooks/use-create-project/type'
import { fetchFindCep } from '../../../../services/api-viacep'
import SnackbarPersonalized from '../../../atoms/SnackbarPersonalized'

export default function CreateProjectForms() {
  const [open, setOpen] = useAtom(openCreatioModal)
  const [projects, setProjects] = useAtom(projectsList)
  const [dataInput, setDataInput] = useState<ProjectInput>({
    title: '',
    zip_code: '',
    cost: 0,
    deadline: dayjs(new Date()).date.toString()
  })
  const [openSnackError, setOpenSnackError] = useState(false)
  const [cookies] = useCookies()
  const [, setOpenCreate] = useAtom(openSnackSuccessCreate)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      zip_code: '',
      cost: 0,
      deadline: dayjs(new Date())
    }
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetchFindCep(data.zip_code)

      setDataInput({
        ...data,
        deadline: data.deadline.$d,
        cost: parseInt(data.cost)
      })

      const projectsValues = projects
      setProjects([
        ...projectsValues,
        {
          ...data,
          username: cookies.username,
          deadline: data.deadline.$d,
          cost: parseInt(data.cost),
          city: `${response.city}/${response.state}`
        }
        
      ])

      setOpen(false)
    } catch {
      setOpenSnackError(true)
    }
  }

  const {data, isLoading, error} = useCreateProject(dataInput, cookies.username, cookies.token)

  if(error) {
    setOpenSnackError(true)
  }

  useEffect(() => {
    if(data && data?.createProject.id > 0 && !isLoading) {
      setOpenCreate(true)
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
          <Box sx={{ mt: 1 }}>
            <FieldsContainer control={control} errors={errors} />
          </Box>
        </DialogContent>
        <ButtonsContainer />
      </Box>
      <SnackbarPersonalized type={"error"} open={openSnackError} handleClose={() => setOpenSnackError(false)} >
        Algo de errado aconteceu. Confira se os dados preenchidos.
      </SnackbarPersonalized>
    </Dialog>
  )
}
