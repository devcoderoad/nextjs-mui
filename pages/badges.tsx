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
import Typography from '@mui/material/Typography'

/* Icons */
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import StarIcon from '@mui/icons-material/StarBorder'
import Toolbar from '@mui/material/Toolbar'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'

/* Config */
import { constant } from '@config/constants'

/* Components */
import Copyright from '@components/Copyright'
import {
  IconTrash,
  IconSend,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconRecordMail,
  IconAt,
} from '@tabler/icons-react'
import {
  Avatar,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Stack,
  useTheme,
} from '@mui/material'

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
  const theme = useTheme()
  const styleBox = {
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative',
    borderRadius: 'var(calc(1rem * 1))',
    backgroundImage: 'url("/wave-bg.svg")',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    border: 'calc(0.0625rem * var(1)) solid rgb(233, 236, 239)',
    padding: 'var(calc(2rem * var(1)))',
    flex: '0 0 calc(17.5rem * var(1))',
    color: 'white',
    maxWidth: '33.33%',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  }
  const styleBtnGradPrimary = {
    borderRadius: 10,
    backgroundImage: 'var(--gradient-primary);',
  }
  const styleBtnGradWarning = {
    borderRadius: 10,
    backgroundImage: 'var(--gradient-warning);',
  }
  const styleBtnGradSuccess = {
    borderRadius: 10,
    backgroundImage: 'var(--gradient-success);',
    color: 'white',
  }
  const styleVcard = {
    position: 'relative',
    width: '50%',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    zIndex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '1rem',
    '&:before, &:after': {
      content: '" "',
      position: 'absolute',
      background: '#dfdfdf',
      height: '51.5%',
      left: 0,
      right: 0,
      width: '50%',
      backgroundImage: 'url(/triangle-bg.svg)',
      backgroundRepeat: 'no-repeat',
    },
    '&:before': {
      zIndex: 0,
      top: 0,
      borderRadius: '0px 50px 0px 0px',
    },
    '&:after': {
      zIndex: -1,
      bottom: 0,
      borderRadius: '0px 0px 50px 0px',
    },
    a: {
      color: 'secondary.dark',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  }
  return (
    <React.Fragment>
      <Paper sx={{ px: 3, pt: 4, pb: 6, my: 2 }}>
        <Box>
          <Typography color={'secondary.main'}>Default</Typography>
          <Stack direction={'row'} spacing={2} my={2}>
            <Button variant="outlined" startIcon={<IconTrash stroke={1.5} />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<IconSend stroke={1.5} />}>
              Send
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<IconTrash stroke={1.5} />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="error"
              endIcon={<IconSend stroke={1.5} />}
            >
              Send
            </Button>
          </Stack>
        </Box>
        <Divider sx={{ my: 3 }} />
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
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography color={'secondary.main'}>Gradient</Typography>
          <Stack direction={'row'} spacing={2} my={2}>
            <Button
              variant="outlined"
              startIcon={<IconTrash stroke={1.5} />}
              sx={styleBtnGradSuccess}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              endIcon={<IconSend stroke={1.5} />}
              sx={styleBtnGradWarning}
            >
              Send
            </Button>
            <Button
              variant="contained"
              endIcon={<IconSend stroke={1.5} />}
              sx={styleBtnGradPrimary}
            >
              Submit
            </Button>
          </Stack>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography color={'secondary.main'}>Cards</Typography>
          <Stack direction={'row'} spacing={3}>
            <Card sx={styleBox}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="white" component="div">
                    Mac Miller
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="previous" sx={styleBtnGradWarning}>
                    {theme.direction === 'rtl' ? (
                      <SkipNextIcon />
                    ) : (
                      <SkipPreviousIcon />
                    )}
                  </IconButton>
                  <IconButton aria-label="play/pause" sx={styleBtnGradWarning}>
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                  <IconButton aria-label="next" sx={styleBtnGradWarning}>
                    {theme.direction === 'rtl' ? (
                      <SkipPreviousIcon />
                    ) : (
                      <SkipNextIcon />
                    )}
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </Stack>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          <Typography color="secondary.main">Employeee</Typography>
          <Stack sx={styleVcard}>
            <Box width={'50%'}>
              <Stack p={4} direction={'column'} alignItems={'center'}>
                <Avatar
                  src="https://picsum.photos/250/250"
                  sx={{
                    width: '130px',
                    height: '130px',
                    mx: 'auto',
                    borderWidth: '2px',
                    borderStyle: 'dashed',
                    borderColor: 'white',
                  }}
                />
                <Typography component={'h5'} mt={2} fontWeight={600}>
                  <a className="text-muted" href="#">
                    Curtis Biafrah Amarek
                  </a>
                </Typography>
                <Box color={'secondary.dark'}>
                  <Button
                    startIcon={<IconAt size={16} />}
                    color="secondary"
                    sx={{ textTransform: 'lowercase', mt: 1 }}
                    variant="outlined"
                    size="small"
                  >
                    admin@admin.org
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box
              width={'50%'}
              alignSelf={'center'}
              sx={{ zIndex: 1, position: 'relative', px: 3 }}
            >
              <Stack rowGap={1} pt={3} pb={3}>
                <Typography
                  fontSize={'1.5rem'}
                  fontWeight={600}
                  color="secondary.main"
                >
                  Web Administrator
                </Typography>
                <Typography component="p" marginY={2} color="secondary">
                  Lorem Ipsum has been the industries standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Typography>
                <Stack direction={'row'} spacing={2} marginY={2}>
                  <a href="#" className="text-info h5">
                    <IconBrandLinkedin />
                  </a>
                  <a href="#" className="text-dark h5">
                    <IconBrandGithub />
                  </a>
                  <a href="#" className="text-primary h5">
                    <IconBrandFacebook />
                  </a>
                </Stack>
              </Stack>
            </Box>
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
