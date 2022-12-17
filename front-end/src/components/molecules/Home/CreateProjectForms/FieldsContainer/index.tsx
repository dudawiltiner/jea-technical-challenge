import { Box } from '@mui/material'
import React from 'react'
import { InputCEP, InputDate, InputName } from '../../../../atoms/Home/Forms'
import { Dayjs } from 'dayjs'

export default function FieldsContainer() {
  const [value, setValue] = React.useState<Dayjs | null>(null)

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <InputName />
      <InputCEP />
      <InputDate value={value} changeValue={setValue} />
    </Box>
  )
}
