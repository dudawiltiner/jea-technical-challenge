import { Grid } from '@mui/material'
import React from 'react'
import { ButtonSubmit, LinkForm } from '../../../../atoms/Sign/Forms'

export default function ButtonAndLink() {
  return (
    <div>
      <ButtonSubmit>CADASTRAR</ButtonSubmit>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <LinkForm link="/login">
            {'Já possui uma conta? Realize o seu login'}
          </LinkForm>
        </Grid>
      </Grid>
    </div>
  )
}
