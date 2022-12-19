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
import { useAtom } from 'jotai'
import { projectsList } from '../../../../store'
import { Typography } from '@mui/material'

export default function ProjectsContainer() {
  const [projects] = useAtom(projectsList)

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {projects.length > 0 ? (
            projects?.map((el) => (
              <Grid item key={el.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AURdkb07eYm1MWBAffq7J3HJvLyv2nn3AQ&usqp=CAU"
                  />
                  <CardContent>
                    <TitleCard title={el.title} />
                    <ListAboutProject
                      username={el.username}
                      city={el.city}
                      date={new Date(el.deadline).toLocaleDateString()}
                    />
                  </CardContent>
                  <Actions data={el} done={el.done} />
                </Card>
              </Grid>
            ))
          ) : (
            <Container maxWidth="sm">
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Ainda não temos projetos criados na empresa, que tal ser o
                primeiro a criar um?
              </Typography>
            </Container>
          )}
        </Grid>
      </Container>
    </div>
  )
}
