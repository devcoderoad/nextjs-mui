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

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Cog from '@components/Cog/Default'
import TabsDefault from '@components/Tabs/Default'
import DashboardBreadcrumb from '@components/Toolbar/Breadcrumb'
import ToolbarConfig from '@components/Toolbar/Config'
import Messages from '@components/Message/User'
import System from '@components/Message/System'
import {
  IconAccessPoint,
  IconArrowDownRight,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandYoutube,
  IconCheckupList,
  IconClick,
  IconDisabled,
  IconEye,
  IconHourglass,
  IconHourglassHigh,
  IconLeafOff,
  IconOutbound,
  IconShoppingCart,
} from '@tabler/icons-react'

/* Components */
import CardStatsDefault from '@components/Stats/Default'
import CardStatsBadged from '@components/Stats/Badge'
import CardStatsSummary from '@components/Stats/Summary'
import BadgeDefault from '@components/Badge/Default'
import AlertSnackBar from '@components/Alert/SnackBar'
import React from 'react'

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
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Statistic
              </Typography>
              <Grid
                container
                direction={'row'}
                justifyContent={'space-evenly'}
                gap={0}
                spacing={[1, 2]}
              >
                <Grid item xl={6}>
                  <CardStatsDefault
                    icon={<IconEye color="#929292" size={18} />}
                    title="Total Views"
                    total={125}
                    items={[
                      { name: 'Global', value: 90, type: 'primary' },
                      { name: 'Australia', value: 10, type: 'info' },
                      { name: 'Finland', value: 25, type: 'success' },
                    ]}
                    type="primary"
                    size="xl"
                  />
                </Grid>
                <Grid item xl={6}>
                  <CardStatsDefault
                    title="Total Views"
                    total={2313}
                    items={[{ name: 'Global', value: 90, type: 'primary' }]}
                    type="primary"
                    size="xl"
                  />
                </Grid>
              </Grid>
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
            <Box marginY={3} display={'inline'}>
              <Stack direction={'row'} spacing={2}>
                <Stack
                  direction={'row'}
                  spacing={1}
                  alignContent={'center'}
                  alignItems={'center'}
                >
                  <Typography
                    marginBottom={1}
                    color="secondary"
                    component="h4"
                    variant="subtitle2"
                  >
                    Icon
                  </Typography>
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
                <Stack
                  direction={'row'}
                  spacing={2}
                  alignContent={'center'}
                  alignItems={'center'}
                >
                  <Typography
                    marginBottom={1}
                    color="secondary"
                    component="h4"
                    variant="subtitle2"
                  >
                    Alert
                  </Typography>
                  <Grid container direction={'row'} spacing={2} gap={2}>
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="success"
                      type="relative"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="warning"
                      type="relative"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="info"
                      type="relative"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="error"
                      type="relative"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="success"
                      type="relative"
                      variant="outlined"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="warning"
                      type="relative"
                      variant="filled"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="info"
                      type="relative"
                      variant="outlined"
                    />
                    <AlertSnackBar
                      title="Hold Up"
                      message="This is the message"
                      mode="error"
                      type="relative"
                      variant="outlined"
                    />
                  </Grid>
                </Stack>
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
                Configuration
              </Typography>
              <Box>
                <Stack direction={'row'} spacing={4}>
                  <Box maxWidth={'sm'}>
                    <ToolbarConfig title={'Configuration Widget'}>
                      <React.Fragment>
                        <Box py={3}>
                          <Typography variant="body2" mb={1}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, nostrum omnis. Lorem, ipsum dolor sit
                            amet consectetur adipisicing elit.
                          </Typography>
                        </Box>
                        <Stack direction={'row'} spacing={1}>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<IconClick stroke={1.5} size={22} />}
                            color="error"
                          >
                            View More
                          </Button>
                          <Button
                            color="error"
                            variant="contained"
                            size="small"
                            startIcon={<IconLeafOff stroke={1.5} size={22} />}
                          >
                            Dispatch
                          </Button>
                        </Stack>
                      </React.Fragment>
                    </ToolbarConfig>
                  </Box>
                  <Box>
                    <Paper
                      sx={{
                        borderRadius: 2,
                        borderColor: '#fefefe',
                        boxShadow: 'var(--drop-shadow)',
                      }}
                    >
                      <Box
                        display={'flex'}
                        justifyItems={'space-between'}
                        alignItems={'center'}
                      >
                        <IconButton
                          sx={{
                            p: 2,
                            background: 'var(--gradient-primary)',
                            borderRadius: 2,
                            mr: 2,
                          }}
                        >
                          <IconAccessPoint color="white" stroke={1} size={44} />
                        </IconButton>
                        <Box>
                          <Typography
                            fontSize={18}
                            fontWeight={600}
                            color="secondary"
                          >
                            Check
                          </Typography>
                          <Typography variant="caption" color="secondary">
                            connection settings
                          </Typography>
                        </Box>
                        <Cog />
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper
                      sx={{
                        borderRadius: 2,
                        borderColor: '#fefefe',
                        boxShadow: 'var(--drop-shadow)',
                      }}
                    >
                      <Box
                        display={'flex'}
                        justifyItems={'space-between'}
                        alignItems={'center'}
                        sx={{
                          background: 'var(--alpha-bg-success)',
                        }}
                      >
                        <IconButton
                          sx={{
                            p: 2,
                            background: 'var(--gradient-success)',
                            borderRadius: 2,
                            mr: 2,
                          }}
                        >
                          <IconOutbound color="white" stroke={1} size={44} />
                        </IconButton>
                        <Box>
                          <Typography fontSize={18} fontWeight={600}>
                            Sign Off
                          </Typography>
                          <Typography variant="caption">
                            connection settings
                          </Typography>
                        </Box>
                        <Cog />
                      </Box>
                    </Paper>
                  </Box>
                </Stack>
                {/* <DashboardBreadcrumb /> */}
              </Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Paper Cards
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xl={3}>
                    <ToolbarConfig title="Widgets with Actions" size="sm">
                      <Box mx="auto" textAlign={'center'} py={4}>
                        <Typography
                          fontSize={22}
                          fontWeight={500}
                          color={'info.main'}
                        >
                          Earnings
                        </Typography>
                        <Typography
                          fontSize={48}
                          fontWeight={800}
                          color={'primary'}
                        >
                          $1020
                        </Typography>
                        <Button variant="outlined" size="small" color="info">
                          +13% since last week
                        </Button>
                      </Box>
                    </ToolbarConfig>
                  </Grid>
                  <Grid item xl={3}>
                    <ToolbarConfig title="Widgets with Configuration" size="sm">
                      <Stack
                        direction={'row'}
                        spacing={[2]}
                        gap={0}
                        py={2}
                        justifyContent={'space-evenly'}
                      >
                        <IconButton
                          size="large"
                          sx={{
                            backgroundColor: 'var(--alpha-bg-secondary)',
                            marginY: 2,
                            ':hover': { backgroundColor: 'rgba(0,0,0, 0.199)' },
                          }}
                        >
                          <IconCheckupList
                            size={42}
                            stroke={1.5}
                            color={'rgba(0,0,0, 0.299)'}
                          />
                        </IconButton>
                        <Typography paragraph variant="body2">
                          Get exclusively features updates on permanent
                          membership!
                        </Typography>
                      </Stack>
                    </ToolbarConfig>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Summary Cards
              </Typography>
              <Box>
                <Stack direction={'row'} spacing={2}>
                  <CardStatsSummary />
                  <CardStatsSummary
                    title="Profit"
                    total={234}
                    type="error"
                    items={[{ name: 'decrease', value: 22, type: 'error' }]}
                    icon={
                      <IconArrowDownRight
                        color="#929292"
                        size={38}
                        stroke={1}
                      />
                    }
                  />
                  <CardStatsSummary />
                </Stack>
              </Box>
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
      </Container>
    </DashboardLayout>
  )
}
