import React from 'react'
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import { CalendarMonth, LocationCity, Person } from '@mui/icons-material'
import {
  AvatarItem,
  TextItem
} from '../../../../atoms/Home/ProjectsContainer/Card'

export default function ListAboutProject() {
  return (
    <Typography variant="body2" color="text.secondary">
      <List>
        <ListItem sx={{ ml: 0 }}>
          <AvatarItem>
            <Person />
          </AvatarItem>
          <TextItem>Nome da pessoa</TextItem>
        </ListItem>
        <ListItem sx={{ ml: 0 }}>
          <AvatarItem>
            <CalendarMonth sx={{ width: 24, height: 24 }} />
          </AvatarItem>
          <TextItem>22/03/2023</TextItem>
        </ListItem>
        <ListItem sx={{ ml: 0 }}>
          <AvatarItem>
            <LocationCity />
          </AvatarItem>
          <TextItem>Nome da cidade</TextItem>
        </ListItem>
      </List>
    </Typography>
  )
}
