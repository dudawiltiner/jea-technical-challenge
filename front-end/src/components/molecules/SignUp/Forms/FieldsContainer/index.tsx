import React from 'react'
import {
  InputName,
  InputPassword,
  InputUsername
} from '../../../../atoms/Sign/Forms'

export default function FieldsContainer() {
  return (
    <div>
      <InputName />
      <InputUsername />
      <InputPassword />
    </div>
  )
}
