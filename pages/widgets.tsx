import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

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
  IconHourglass,
  IconHourglassHigh,
  IconHourglassLow,
  IconShoppingCart,
} from '@tabler/icons-react'

/* Components */
import CardStatsDefault from '@components/Stats/Default'
import CardStatsBadged from '@components/Stats/Badge'
import BadgeDefault from '@components/Badge/Default'

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
              <Paper
                sx={{
                  p: 2,
                  color: '#fff',
                  background: 'var(--bg-gradient-bluish)',
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
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Statistic
              </Typography>
              <Box maxWidth={'sm'}>
                <CardStatsDefault
                  title="Total Views"
                  total={2313}
                  items={[{ name: 'Global', value: 90, type: 'primary' }]}
                  type="primary"
                />
                <CardStatsDefault
                  title="Total Views"
                  total={125}
                  items={[
                    { name: 'Global', value: 90, type: 'primary' },
                    { name: 'Australia', value: 10, type: 'info' },
                    { name: 'Finland', value: 25, type: 'success' },
                  ]}
                  type="primary"
                />
              </Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Statistic Badge
              </Typography>
              <Box>
                <CardStatsBadged />
              </Box>
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
              <Stack direction={'row'} spacing={1}>
                <IconButton
                  sx={{
                    borderRadius: 'calc(0.5rem* 1 )',
                    boxShadow: 'none',
                    width: 'calc(2.75rem * 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--gradient-primary)',
                  }}
                >
                  <IconHourglassHigh color="white" stroke={1.1} />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: 'calc(0.5rem* 1 )',
                    boxShadow: 'none',
                    width: 'calc(2.75rem * 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--gradient-warning)',
                  }}
                >
                  <IconHourglass color="white" stroke={1.1} />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: 'calc(0.5rem* 1 )',
                    boxShadow: 'none',
                    width: 'calc(2.75rem * 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--gradient-primary)',
                  }}
                >
                  <IconShoppingCart color="white" stroke={1.1} />
                </IconButton>
              </Stack>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Badges
              </Typography>
              <Box>
                <BadgeDefault />
              </Box>
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
