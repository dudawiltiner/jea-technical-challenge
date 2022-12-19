import { Alert, Grid } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'
import { InputPassword, InputUsername } from '../../../../atoms/Sign/Forms'

interface FieldsProps {
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
  control: Control<
    {
      username: string
      password: string
    },
    any
  >
}

export default function FieldsContainer({ errors, control }: FieldsProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputUsername {...field} />}
        />
        {errors?.username?.type === 'required' && (
          <Alert sx={{ mt: 1 }} severity="error">
            O nome do usuário precisa ser preenchido
          </Alert>
        )}
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputPassword {...field} />}
        />
        {errors?.password?.type === 'required' && (
          <Alert sx={{ mt: 1 }} severity="error">
            A senha precisa ser preenchida
          </Alert>
        )}
      </Grid>
    </Grid>
  )
}
