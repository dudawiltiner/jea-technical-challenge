import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {
  Actions,
  ListAboutProject,
  TitleCard
} from '../../../molecules/Home/ProjectsContainer'

export default function ProjectsContainer() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AURdkb07eYm1MWBAffq7J3HJvLyv2nn3AQ&usqp=CAU"
                />
                <CardContent>
                  <TitleCard />
                  <ListAboutProject />
                </CardContent>
                <Actions />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
