import * as React from 'react'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/StarBorder'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'

/* Config */
import { constant } from '@config/constants'

/* Components */
import Copyright from '@components/Copyright'
import { IconButton, Paper, Stack } from '@mui/material'
import {
  IconArrowRight,
  IconCpu2,
  IconServer2,
  IconServerBolt,
  IconServerCog,
} from '@tabler/icons-react'

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
]

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
]

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Paper
        sx={{
          position: 'relative',
          zIndex: 0,
          ':before': {
            zIndex: -1,
            content: '" "',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1840 320%27%3E%3Cpath fill=%27%233c988f%27 fill-opacity=%270.125%27 d=%27M0,64L120,101.3C240,139,480,213,720,250.7C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z%27%3E%3C/path%3E%3C/svg%3E");',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 100%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            right: 0,
          },
        }}
      >
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link
                href="/"
                sx={{
                  transition: 'all .5s ease',
                  verticalAlign: 'middle',
                  ml: 1.5,
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
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Features
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Enterprise
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Support
              </Link>
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default MUI
            components with little customization.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth /* variant={tier.buttonVariant} */>
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer: any) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item: any) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Paper>
      <Paper
        sx={{
          mt: 3,
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 0,
          overflow: 'hidden',
          ':before': {
            top: '-30rem',
            right: '-10rem',
            width: '980px',
            height: '980px',
            content: '" "',
            backgroundColor: '#f2f2f2',
            position: 'absolute',
            zIndex: '-1',
            borderRadius: '20px',
            bottom: '0',
            transform: 'rotate(-45deg)',
          },
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          alignContent={'space-evenly'}
          py={20}
          px={3}
          sx={{
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=%271860%27 height=%271900%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M1063.43 12.6364c367.16 45.007 687.98 304.0646 794.88 679.0506 3.46 11.402-3.7 23.608-15.24 26.616l-57.69 15.041c120.54 462.306-157.08 934.396-619.51 1054.966l15.02 57.61c3.01 11.53-4.16 23.73-15.82 26.28-49.7 11.73-99.44 19.33-148.84 23-22.388 3.12-49.462 4.71-81.749 4.71-444.176 0-809.937-314.15-908.1237-729.65-.0771-.29-.1482-.58-.213-.88-10.7156-45.42-17.9662-90.87-21.9148-136.07C1.6958 1004.77.4023.3519.4023.3519H948.027c50.826 0 88.603 4.2072 115.403 12.2845z%27 fill=%27%23fff%27/%3E%3C/svg%3E")',
          }}
        >
          <Grid container columns={12} spacing={2} gap={0}>
            <Grid item xl={6}>
              <Grid item xl={12}>
                <Box mb={6}>
                  <Typography
                    variant="h5"
                    textAlign={'center'}
                    color="secondary"
                  >
                    Choose your Plan
                  </Typography>
                </Box>
              </Grid>
              <Grid container columns={12} spacing={2} height={'100%'} gap={0}>
                <Grid item xl={6}>
                  <Card>
                    <CardHeader
                      sx={{ pb: 0 }}
                      title={
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          color="primary"
                        >
                          Trial
                        </Typography>
                      }
                    />
                    <CardContent>
                      <ol>
                        <li>500Mb Hardisk Space</li>
                        <li>50Gb Bandwidth</li>
                        <li>1 Database instance</li>
                      </ol>
                      <Button variant="outlined" size="small">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xl={6}>
                  <Card>
                    <CardHeader
                      sx={{ pb: 0 }}
                      title={
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          color="error"
                        >
                          Professional
                        </Typography>
                      }
                    />
                    <CardContent>
                      <ol>
                        <li>Unlimited Hardisk Space</li>
                        <li>Up from 50Gb Bandwidth</li>
                        <li>Unlimeted Database instances</li>
                      </ol>
                      <Button variant="outlined" size="small" color="error">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid item xl={12}>
                <Box>
                  <Typography variant="caption" textAlign={'center'}>
                    After the free trial period ends, you will be automatically
                    charged the monthly subscription fee. You can cancel your
                    subscription and request a refund within 7 days after your
                    trial expires.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              item
              xl={6}
              alignSelf={'center'}
              textAlign={'center'}
              mx={'auto'}
            >
              <Stack spacing={1} gap={0} marginX={'auto'}>
                <Typography variant="h5" color="red">
                  <IconServer2
                    size={50}
                    stroke={1}
                    color={'red'}
                    style={{ verticalAlign: 'middle', marginRight: '.5rem' }}
                  />
                  Storage
                </Typography>
                <Typography variant="h5" color="green">
                  <IconServerBolt
                    size={50}
                    stroke={1}
                    color={'green'}
                    style={{ verticalAlign: 'middle', marginRight: '.5rem' }}
                  />
                  Bandwidth
                </Typography>
                <Typography variant="h5" color="orange">
                  <IconServerCog
                    size={50}
                    stroke={1}
                    color={'orange'}
                    style={{ verticalAlign: 'middle', marginRight: '.5rem' }}
                  />
                  Configuration
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        elevation={6}
        sx={{
          mt: 3,
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 0,
          overflow: 'hidden',
          ':before': {
            top: '-30rem',
            right: '-10rem',
            width: '980px',
            height: '980px',
            content: '" "',
            backgroundColor: '#f2f2f2',
            position: 'absolute',
            zIndex: '-1',
            borderRadius: '20px',
            bottom: '0',
            transform: 'rotate(-45deg)',
          },
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          alignContent={'space-evenly'}
          py={20}
          px={3}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            zIndex: 0,
            ':before': {
              content: '""',
              zIndex: -1,
              width: '100%',
              height: '100%',
              position: 'absolute',
              right: 0,
              bottom: 0,
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage:
                'url("data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3Csvg viewBox=%270 0 500 500%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath fill=%27%23ffffff%27 fill-opacity=%271%27 d=%27M 210.91 244.412 L 252.545 246.271 C 294.179 248.268 377.449 251.777 460.718 246.271 C 543.987 240.553 627.256 225.823 668.891 218.212 L 710.526 210.741 L 710.526 289.305 L 668.891 289.305 C 627.256 289.305 543.987 289.305 460.718 289.305 C 377.449 289.305 294.179 289.305 252.545 289.305 L 210.91 289.305 L 210.91 244.412 Z%27 style=%27transform-origin: 460.718px 250.023px;%27 transform=%27matrix(0, -1, 1, 0, 0, 0.000015258789)%27/%3E%3C/svg%3E");',
            },
          }}
        >
          <Grid container columns={12} spacing={2} gap={0}>
            <Grid item xl={6}>
              <Grid item xl={12}>
                <Box mb={6}>
                  <Typography
                    variant="h5"
                    textAlign={'center'}
                    color="secondary"
                  >
                    Choose your Plan
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                columns={12}
                spacing={2}
                height={'100%'}
                gap={0}
                mx={3}
              >
                <Grid item xl={6}>
                  <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <CardHeader
                      sx={{ pb: 0 }}
                      title={
                        <Typography
                          variant="h4"
                          fontWeight={600}
                          color="primary"
                        >
                          Droptler
                        </Typography>
                      }
                    />
                    <CardContent sx={{ pt: 0 }}>
                      <ol>
                        <li>500Mb Hardisk Space</li>
                        <li>50Gb Bandwidth</li>
                        <li>1 Database instance</li>
                      </ol>
                      <Button variant="outlined" size="small">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xl={6}>
                  <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <CardHeader
                      sx={{ pb: 0 }}
                      title={
                        <Typography variant="h4" fontWeight={600} color="error">
                          Burkenetes
                        </Typography>
                      }
                    />
                    <CardContent sx={{ pt: 0 }}>
                      <ol>
                        <li>Unlimited Hardisk Space</li>
                        <li>Up from 50Gb Bandwidth</li>
                        <li>Unlimeted Database instances</li>
                      </ol>
                      <Button variant="outlined" size="small" color="error">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid item xl={12}>
                <Box>
                  <Typography variant="caption" textAlign={'center'}>
                    After the free trial period ends, you will be automatically
                    charged the monthly subscription fee. You can cancel your
                    subscription and request a refund within 7 days after your
                    trial expires.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              item
              xl={6}
              alignSelf={'center'}
              textAlign={'center'}
              mx={'auto'}
            >
              <Box className="GridItemstyles-sc-eu71zi-0 guHjPi" mx={8}>
                <div className="CardProductstyles__StyledCardProductContainer-sc-12ecnad-0 jDNkna">
                  <div className="CardProductstyles__StyledMainContent-sc-12ecnad-1 kmAfXG">
                    <div className="CardProductstyles__StyledHeaderContent-sc-12ecnad-3 hjDika">
                      <div className="CardProductstyles__StyledCardProductHeader-sc-12ecnad-4 fESANw">
                        <div className="CardProductstyles__StyledHeaderIcon-sc-12ecnad-9 eEWZzO">
                          <IconCpu2 size={58} stroke={1} />
                        </div>
                        <div className="CardProductstyles__StyledCardProductHeaderTitle-sc-12ecnad-5 teLuC">
                          <h3 className="Typographystyles-sc-o7qsl9-0 ebxQNu">
                            Premium CPU-Optimized
                          </h3>
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 1 0.002" preserveAspectRatio="none">
                      <path
                        d="M0 0 l12 0"
                        stroke="#FFF"
                        stroke-width="1"
                        stroke-dasharray="4.8"
                        vector-effect="non-scaling-stroke"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <div className="CardProductstyles__StyledCardProductText-sc-12ecnad-2 djFjKh">
                      <ul className="CardProductstyles__StyledFeatureList-sc-12ecnad-7 bQkfJ">
                        <li>
                          <p className="Typographystyles-sc-o7qsl9-0 fOEtTW">
                            Upgrade to Premium CPU-Optimized for up to 10
                            network speeds, faster processors, &amp; NVMe SSDs.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p className="Typographystyles-sc-o7qsl9-0 jHehA">
                      <a
                        className="LinkTextstyles-sc-jz3jcd-0 ftQMfF"
                        href="/pricing/droplets#cpu-optimized-droplets"
                      >
                        Get started
                        <IconButton>
                          <IconArrowRight />
                        </IconButton>
                      </a>
                    </p>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      {/* End footer */}
    </React.Fragment>
  )
}

export default function Pricing() {
  return (
    <DashboardLayout>
      <PricingContent />
    </DashboardLayout>
  )
}
