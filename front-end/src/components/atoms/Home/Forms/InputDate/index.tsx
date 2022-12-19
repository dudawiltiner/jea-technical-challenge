import React from 'react'
import { TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Dayjs } from 'dayjs'

interface InputDateProps {
  value: Dayjs | null
  changeValue: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

export default function InputDate({ value, changeValue }: InputDateProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Data Final"
        value={value}
        onChange={(newValue) => {
          changeValue(newValue)
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </LocalizationProvider>
  )
}
