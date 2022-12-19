import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { FieldsContainer } from '../../../molecules/SignIn/Forms'
import ButtonAndLink from '../../../molecules/SignIn/Forms/ButtonAndLink'
import { useForm } from 'react-hook-form'
import { useLogin } from '../../../../hooks/use-login'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import SnackbarPersonalized from '../../../atoms/SnackbarPersonalized'

export default function Forms() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [openSnackError, setOpenSnackError] = useState(false)
  const [stop, setStop] = useState(false)
  const [cookies, setCookie] = useCookies()
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = (data: any) => {
    setUsername(data.username)
    setPassword(data.password)
    setStop(false)
  }

  const { data, isLoading, error } = useLogin(username, password)

  if(error && !stop) {
    setOpenSnackError(true)
    setStop(true)
  }

  useEffect(() => {
    console.log(data)
    if (!isLoading && data && data.loginUser?.token !== '') {
      let dateLater = new Date()
      dateLater.setMinutes(dateLater.getMinutes() + 15)
      setCookie('token', data.loginUser.token, { expires: dateLater })
      setCookie('username', data.loginUser.username, { expires: dateLater })
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])

  useEffect(() => {
    if (cookies.token) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <FieldsContainer control={control} errors={errors} />
      <ButtonAndLink />
      <SnackbarPersonalized type={"error"} open={openSnackError} handleClose={() => setOpenSnackError(false)} >
        Algo de errado aconteceu. Confira se os dados preenchidos.
      </SnackbarPersonalized>
    </Box>
  )
}
