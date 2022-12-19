import React from 'react'
import { useCookies } from 'react-cookie'
import { Subtitle, Title } from '../../../../atoms/Home/Hero'

export default function Text() {
  const [cookies] = useCookies()
  return (
    <div>
      <Title>{`Olá, ${cookies.username}!`}</Title>
      <Subtitle>
        Esse é o seu espaço para acomponhar os projetos da empresa e realizar a
        gestão dos projetos que você criou. Aproveite a ferramenta.
      </Subtitle>
    </div>
  )
}
