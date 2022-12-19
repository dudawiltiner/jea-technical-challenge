import { Grid } from '@mui/material'
import React from 'react'
import { ButtonSubmit, LinkForm } from '../../../../atoms/Sign/Forms'

interface ButtonAndLinkProps {
  isLoading: boolean
}

export default function ButtonAndLink({ isLoading }: ButtonAndLinkProps) {
  return (
    <div>
      <ButtonSubmit isLoading={isLoading}>ENTRAR</ButtonSubmit>
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
