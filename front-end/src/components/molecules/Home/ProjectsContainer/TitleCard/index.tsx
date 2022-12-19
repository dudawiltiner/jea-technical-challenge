import React from 'react'
import { Title } from '../../../../atoms/Home/ProjectsContainer/Card'

interface TitleCardProps {
  title: string
}

export default function TitleCard({ title }: TitleCardProps) {
  return <Title>{title}</Title>
}
