import React from 'react'
import Typography from '@mui/material/Typography'
import { Avatar, List } from '@mui/material'
import { CalendarMonth, LocationCity, Person } from '@mui/icons-material'
import {
  AvatarItem,
  TextItem
} from '../../../../atoms/Home/ProjectsContainer/Card'

interface ListAboutProjectProps {
  username: string
  city: string
  date: string
}

export default function ListAboutProject({
  username,
  city,
  date
}: ListAboutProjectProps) {
  return (
    <Typography variant="body2" color="text.secondary">
      <List>
        <AvatarItem text={<TextItem>{username}</TextItem>}>
          <Avatar sx={{ width: 24, height: 24 }}>
            <Person />
          </Avatar>
        </AvatarItem>

        <AvatarItem text={<TextItem>{date}</TextItem>}>
          <CalendarMonth sx={{ width: 24, height: 24 }} />
        </AvatarItem>

        <AvatarItem text={<TextItem>{city}</TextItem>}>
          <LocationCity sx={{ width: 24, height: 24 }} />
        </AvatarItem>
      </List>
    </Typography>
  )
}
