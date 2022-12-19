import { Checkbox } from '@mui/material'
import React from 'react'

interface CheckProjectProps {
  checked: boolean
  onClick: () => void
}

export default function CheckProject({ checked, onClick }: CheckProjectProps) {
  return <Checkbox checked={checked} onClick={onClick} color="secondary" />
}
