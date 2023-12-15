import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme } from '@mui/material/styles'

/* Components */
import Copyright from '@components/Copyright'

/* Config */
import { constant } from '@config/constants'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()

export default function Page() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            <Link
              href="/"
              sx={{
                transition: 'all .5s ease',
                verticalAlign: 'middle',
                ml: 0,
                ':hover': {
                  filter: 'brightness(1.35);',
                },
              }}
            >
              <img
                src="/logo-white.svg"
                alt={constant.siteName}
                height={24}
                style={{ verticalAlign: 'middle' }}
              />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
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
              <Link
                href="/"
                sx={{
                  transition: 'all .5s ease',
                  verticalAlign: 'middle',
                  ml: 0,
                  ':hover': {
                    filter: 'brightness(1.35);',
                  },
                }}
              >
                <img
                  src="/logo.svg"
                  alt={constant.siteName}
                  height={64}
                  style={{ verticalAlign: 'middle' }}
                />
              </Link>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction={{ lg: 'row' }}
              spacing={1}
              justifyContent="center"
            >
              <Button size="small" variant="contained" color="primary">
                People
              </Button>
              <Button size="small" variant="contained" color="primary">
                Plants
              </Button>
              <Button size="small" variant="contained" color="primary">
                Buildings
              </Button>
              <Button size="small" variant="contained" color="primary">
                Portrait
              </Button>
              <Button size="small" variant="contained" color="primary">
                Faces
              </Button>
              <Button size="small" variant="contained" color="primary">
                Abstract
              </Button>
              <Button size="small" variant="contained" color="primary">
                House
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 0,
                      ':before': {
                        content: '" "',
                        zIndex: 1,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
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
      {/* End footer */}
      {/* </ThemeProvider> */}
    </>
  )
}
