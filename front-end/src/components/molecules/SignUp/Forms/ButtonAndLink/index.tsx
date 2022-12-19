import { Grid } from '@mui/material'
import React from 'react'
import { ButtonSubmit, LinkForm } from '../../../../atoms/Sign/Forms'

interface ButtonAndLinkProps {
  isLoading: boolean
}

export default function ButtonAndLink({ isLoading }: ButtonAndLinkProps) {
  return (
    <div>
      <ButtonSubmit isLoading={isLoading}>CADASTRAR</ButtonSubmit>
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
