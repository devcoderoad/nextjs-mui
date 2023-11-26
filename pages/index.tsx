/* MUI */
import { Container, Typography, Box, Grid, Paper } from '@mui/material'

/* Components */
import ProTip from '@components/ProTip'
// import Link from '@components/Link'
// import Link from 'next/link'
import Link from '@mui/material/Link'
import Copyright from '@components/Copyright'

/* Config */
import { constant } from '@config/constants'

/* Routes */
import { routePage, routeDocumentation } from '@config/routes'

/* Styles */
import { styledBox, styledPaper, styledCard } from '@src/styles'

const styledH = {
  display: 'block',
  marginTop: '1rem',
  marginBottom: '1rem',
}

export default function Home() {
  return (
    <Box maxWidth="xxl" sx={styledBox}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: '2rem' }}>
          <Link
            href="/"
            // sx={{
            //   transition: 'all .5s ease',
            //   verticalAlign: 'middle',
            //   ml: 0,
            //   ':hover': {
            //     filter: 'brightness(1.35);',
            //   },
            // }}
          >
            <img
              src="/logo.svg"
              alt={constant.siteName}
              height={34}
              style={{ verticalAlign: 'middle' }}
            />
          </Link>
          <Typography
            variant="h1"
            // md="h5"
            mt={3}
            fontSize={{ xs: '1.75rem', sm: '2rem' }}
            color="secondary.dark"
          >
            Material UI Financial Dashboard Administrator Theme
          </Typography>
          <div>A premium Theme for your Next.js Website Application</div>
          <Paper sx={styledPaper}>
            <Box padding={2} mt={2}>
              <Grid>
                <Grid item>
                  <Typography color={'secondary'}>
                    Customized and integrated with{' '}
                    <img
                      src="https://raw.githubusercontent.com/nextauthjs/next-auth/c3388bde474d11a9743add30e998da1d6026a7d4/docs/static/img/logo/logo.png"
                      width={20}
                      alt="NextAuth.js in Web Application"
                      style={{ verticalAlign: 'middle' }}
                    />{' '}
                    NextAuth.js, an Authentication System build for Next.js web
                    application.
                  </Typography>
                </Grid>
                {/* <Grid item></Grid> */}
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box>
          <Typography color="primary" variant="h4" sx={styledH}>
            Pages
          </Typography>
          <Box marginY={4} mx="auto">
            <Grid
              container
              spacing={{ xs: 2, lg: 2 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {Object.values(routePage).map((route) => {
                return (
                  route.href !== '/' && (
                    <Grid key={route.name} item xs={2} sm={4} md={4}>
                      <Link href={route.href} underline="none">
                        <Box
                          sx={{
                            boxShadow: '1',
                            p: 4,
                            borderRadius: '.5rem',
                            backgroundColor: 'white',
                            ':hover': { boxShadow: '3' },
                          }}
                        >
                          <Typography variant="h5">{route.name}</Typography>
                          <Typography variant="body2">{route.text}</Typography>
                        </Box>
                      </Link>
                    </Grid>
                  )
                )
              })}
            </Grid>
          </Box>
        </Box>
        <Box marginY={4}>
          <Typography color="primary" variant="h4" sx={styledH}>
            Features
          </Typography>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
              rowGap={1}
            >
              <Grid item md={4} xs={24}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Responsive Pages</Typography>
                  <Box>Mobile Responsive Pages</Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Charts Component</Typography>
                  <Box>Chart Components in your Dashboard</Box>
                </Box>
              </Grid>
              <Grid item md={4} xs={24}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Semantic HTML</Typography>
                  <Box>HTML5 Semantic HTML Tag</Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Button, Icons and Cards</Typography>
                  <Box>Ready to use Button, Icons and Cards</Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box marginY={4}>
          <Typography color="primary" variant="h4" sx={styledH}>
            Documentation
            <Typography color="secondary" component="p" variant="subtitle1">
              See the how to from our documentations
            </Typography>
          </Typography>
          <Box>
            {Object.values(routeDocumentation).map((route) => {
              return (
                <Link
                  key={`${route.href}-docs`}
                  href={route.href}
                  color="secondary"
                  // sx={{ textDecoration: 'none', marginRight: '1rem' }}
                >
                  {route.icon} {route.text}
                </Link>
              )
            })}
          </Box>
        </Box>
        <Box
          my={4}
          sx={{ backgroundColor: 'secondary.light' }}
          borderRadius={2}
        >
          <ProTip />
        </Box>
        <Copyright />
      </Container>
    </Box>
  )
}
