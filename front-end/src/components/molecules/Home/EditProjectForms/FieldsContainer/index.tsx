import { Alert, Grid } from '@mui/material'
import React from 'react'
import {
  InputCEP,
  InputCost,
  InputDate,
  InputName
} from '../../../../atoms/Home/Forms'
import { Dayjs } from 'dayjs'
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form'

interface FieldsProps {
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any
    }>
  >
  control: Control<
    {
      title: string
      zip_code: string
      cost: number
      deadline: Dayjs
    },
    any
  >
}

export default function FieldsContainer({ errors, control }: FieldsProps) {
  return (
    <>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputName {...field} />}
      />
      {errors?.title?.type === 'required' && (
        <Alert sx={{ mt: 1 }} severity="error">
          O título precisa ser preenchido
        </Alert>
      )}
      <Controller
        name="zip_code"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputCEP {...field} />}
      />
      {errors?.zip_code?.type === 'required' && (
        <Alert sx={{ mt: 1 }} severity="error">
          O cep precisa ser preenchido
        </Alert>
      )}

      <Grid sx={{ marginTop: '4px' }} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="cost"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputCost {...field} />}
          />
          {errors?.cost?.type === 'required' && (
            <Alert sx={{ mt: 1 }} severity="error">
              O custo precisa ser preenchido
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="deadline"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputDate value={field.value} changeValue={field.onChange} />
            )}
          />
          {errors?.deadline?.type === 'required' && (
            <Alert sx={{ mt: 1 }} severity="error">
              A data precisa ser preenchida
            </Alert>
          )}
        </Grid>
      </Grid>
    </>
  )
}
