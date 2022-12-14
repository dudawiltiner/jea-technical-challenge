import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { ButtonAndLink, FieldsContainer } from '../../../molecules/SignUp/Forms'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useCreateUser } from '../../../../hooks/use-create-user'
import SnackbarPersonalized from '../../../atoms/SnackbarPersonalized'

export default function Forms() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: ''
  })
  const [openSnackError, setOpenSnackError] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [cookies] = useCookies()
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: ''
    }
  })

  useEffect(() => {
    if (cookies.token) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data: any) => {
    setUser({
      ...data
    })
    setShowLoading(true)
  }

  const { data, isLoading, error } = useCreateUser(user)

  useEffect(() => {
    if (!isLoading && data?.createUser.username !== '') {
      navigate('/login')
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
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3 }}
    >
      <FieldsContainer control={control} errors={errors} />
      <ButtonAndLink isLoading={showLoading && isLoading} />
      <SnackbarPersonalized
        type={'error'}
        open={openSnackError}
        handleClose={() => setOpenSnackError(false)}
      >
        Algo de errado aconteceu. Confira se os dados preenchidos e se o usuário
        ainda não existe.
      </SnackbarPersonalized>
    </Box>
  )
}
