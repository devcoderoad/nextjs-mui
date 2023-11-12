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
import { Stack } from '@mui/system'
import { AddShoppingCart } from '@mui/icons-material'
import { Paper } from '@mui/material'

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
      <Container maxWidth="md" sx={{ my: 5 }}>
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
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <Stack alignItems={'center'}>
                    <Button
                      variant="outlined"
                      startIcon={<AddShoppingCart />}
                      sx={{ borderRadius: 10 }}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
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
      <Container maxWidth="md" component="footer">
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer: any) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Paper sx={{ py: 3, px: 2 }}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul
                  style={{
                    padding: 0,
                    listStyle: 'none',
                    margin: '.88rem 0',
                  }}
                >
                  {footer.description.map((item: any) => (
                    <li key={item}>
                      <Link
                        href="#"
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{
                          textDecoration: 'none',
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Grid item>
                  <Stack alignItems={'center'}>
                    <Button
                      variant="outlined"
                      startIcon={<AddShoppingCart />}
                      sx={{ borderRadius: 10 }}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
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
