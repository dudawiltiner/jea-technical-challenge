import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBack from '../../../atoms/404/BackToHome/ButtonBack'

export default function ButtonBackToHome() {
  return (
    <Link to={"/"}>
      <ButtonBack>Voltar para Home</ButtonBack>
    </Link>
  )
}
