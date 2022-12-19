import React from 'react'
import Text from '../../atoms/Footer/Text'
import LinkToKnow from '../../atoms/Footer/LinkToKnow'

export default function Footer() {
  return (
    <Text>
      {'Feito por Eduarda Wiltiner © '}
      <LinkToKnow link="https://mui.com/">LinkedIn</LinkToKnow>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Text>
  )
}
