import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Avatar, Checkbox, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormControlLabel, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';

import * as S from './style'
import { Add, CalendarMonth, LocationCity, Person } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function ProjectsManage() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container  sx={{ mt: 10 }}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Olá, Nome!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Esse é o seu espaço para acomponhar os projetos da empresa e realizar a gestão
              dos projetos que você criou. Aproveite a ferramenta.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button color="secondary" variant="contained">Ver apenas os meus projetos</Button>
              <Button variant="outlined">Ver todos os projetos</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
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
                    <Typography gutterBottom variant="h5" component="div">
                      Nome do Projeto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <List>
                        <ListItem sx={{ ml: 0}}>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 24, height: 24 }}>
                              <Person />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            secondary="Nome da pessoa"
                          />
                        </ListItem>
                        <ListItem sx={{ ml: 0}}>
                          <ListItemAvatar>
                            <CalendarMonth sx={{ width: 24, height: 24 }} />
                          </ListItemAvatar>
                          <ListItemText
                            secondary="22/03/2023"
                          />
                        </ListItem>
                        <ListItem sx={{ ml: 0}}>
                          <ListItemAvatar>
                            <LocationCity />
                          </ListItemAvatar>
                          <ListItemText
                            secondary="Nome da cidade"
                          />
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Checkbox color="secondary"/>
                    <Button size="small">EDITAR</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      <S.Container>
        <Fab onClick={handleClickOpen} color="secondary" aria-label="add">
          <Add />
        </Fab>
      </S.Container>
      {/* End footer */}

      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
      >
      <DialogTitle>Criar Projeto</DialogTitle>
      <DialogContent dividers>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="cep"
            label="CEP"
            type="text"
            id="cep"
            autoComplete="current-password"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data Final"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField sx={{ mt: 3 }} fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button onClick={handleClose} color="secondary" variant="contained" >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
    </Container>
  );
}