import { CardActions } from '@mui/material'
import React from 'react'
import {
  ButtonEdit,
  CheckProject
} from '../../../../atoms/Home/ProjectsContainer/Card'

export default function Actions() {
  return (
    <CardActions>
      <CheckProject />
      <ButtonEdit>EDITAR</ButtonEdit>
    </CardActions>
  )
}
