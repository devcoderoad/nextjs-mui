import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import PhoneIcon from '@mui/icons-material/Phone'
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed'
import PersonPinIcon from '@mui/icons-material/PersonPin'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Cog from '@components/Cog/Default'
import TabsDefault from '@components/Tabs/Default'
import Messages from '@components/Message/User'
import System from '@components/Message/System'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandYoutube,
} from '@tabler/icons-react'

export default function Page() {
  return (
    <DashboardLayout
      breadcrumb={[
        { url: '/widgets', name: 'Widgets' },
        { url: '/cards', name: 'Cards' },
      ]}
    >
      <Container maxWidth="xl">
        <Grid item xs={12} md={8} lg={9} marginY={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 240,
            }}
          >
            <Box marginBottom={2}>
              <Grid container>
                <Grid item md>
                  <Typography
                    marginBottom={1}
                    color="secondary"
                    component="h4"
                    variant="subtitle2"
                  >
                    Messages
                  </Typography>
                  <Messages />
                </Grid>
                <Grid item md>
                  <Typography
                    marginBottom={1}
                    color="secondary"
                    component="h4"
                    variant="subtitle2"
                  >
                    Notifications
                  </Typography>
                  <System />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9} marginY={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 240,
            }}
          >
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Default
              </Typography>
              <Box>
                <Paper
                  sx={{
                    backgroundImage: 'var(--gradient-primary)',
                    p: 2,
                    color: '#fff',
                  }}
                >
                  <Grid container spacing={[10, 10]}>
                    <Grid item xl={8}>
                      <Typography
                        component={'h1'}
                        fontSize={22}
                        fontWeight={'bold'}
                      >
                        Get Yours Now
                      </Typography>
                      <Typography>Ultimate Price</Typography>
                      <Stack
                        mt={2}
                        direction={'row'}
                        gap={[1, 1]}
                        sx={{
                          '.MuiIconButton-root': {
                            border: '0.5px solid #f2f2f2',
                            boxShadow: 'var(--drop-shadow)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              boxShadow: 'var(--drop-shadow-light)',
                            },
                          },
                        }}
                      >
                        <IconButton>
                          <IconBrandGithub color={'white'} stroke={1} />
                        </IconButton>
                        <IconButton>
                          <IconBrandFacebook color={'white'} stroke={1} />
                        </IconButton>
                        <IconButton>
                          <IconBrandYoutube color={'white'} stroke={1} />
                        </IconButton>
                        <IconButton>
                          <IconBrandTelegram color={'white'} stroke={1} />
                        </IconButton>
                      </Stack>
                    </Grid>
                    <Grid item xl={4}>
                      <Typography fontSize={28} fontWeight={600}>
                        Membership Only
                      </Typography>
                      <Typography mb={1}>New Features</Typography>
                      <Button
                        color="warning"
                        size="small"
                        sx={{
                          color: 'white',
                          backgroundImage: 'var(--gradient-warning)',
                          border: '1px solid rgba(255,255,255, 0.1)',
                          boxShadow: 'var(--drop-shadow)',
                          '&:hover': {
                            boxShadow: 'var(--drop-shadow-light)',
                          },
                        }}
                      >
                        Buy
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Default Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Rounded
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Rounded Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Rounded
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Rounded Background
              </Typography>
              <Box>Widgets</Box>
            </Box>
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  )
}
