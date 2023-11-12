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
import { IconTrash, IconSend } from '@tabler/icons-react'
import { Paper, Stack } from '@mui/material'

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
      <Paper sx={{ p: 3, my: 2 }}>
        <Box>
          <Typography color={'secondary.main'}>Default</Typography>
          <Stack direction={'row'} spacing={2} my={2}>
            <Button variant="outlined" startIcon={<IconTrash stroke={1.5} />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<IconSend stroke={1.5} />}>
              Send
            </Button>
          </Stack>
        </Box>
        <Box>
          <Typography color={'secondary.main'}>Rounded</Typography>
          <Stack direction={'row'} spacing={2} my={2}>
            <Button
              variant="outlined"
              startIcon={<IconTrash stroke={1.5} />}
              sx={{ borderRadius: 10 }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              endIcon={<IconSend stroke={1.5} />}
              sx={{ borderRadius: 10 }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Paper>
    </React.Fragment>
  )
}

export default function Page() {
  return (
    <DashboardLayout>
      <PricingContent />
    </DashboardLayout>
  )
}
