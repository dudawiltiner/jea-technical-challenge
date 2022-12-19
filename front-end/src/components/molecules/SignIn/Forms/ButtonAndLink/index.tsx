import { Grid } from '@mui/material'
import React from 'react'
import { ButtonSubmit, LinkForm } from '../../../../atoms/Sign/Forms'

export default function ButtonAndLink() {
  return (
    <div>
      <ButtonSubmit>ENTRAR</ButtonSubmit>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <LinkForm link="/cadastro">
            {'Não possui uma conta? Cadastre-se'}
          </LinkForm>
        </Grid>
      </Grid>
    </div>
  )
}
