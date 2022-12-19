import React from 'react'
import { Image, Title } from '../../../atoms/Menu/Logo'

interface LogoProps {
  isMobile: boolean
}

export default function Logo({ isMobile }: LogoProps) {
  return (
    <>
      <Image isMobile={isMobile} />
      <Title isMobile={isMobile}>MOON</Title>
    </>
  )
}
