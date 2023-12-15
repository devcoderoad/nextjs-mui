'use client'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Cog from '@components/Cog/Default'
import {
  ChartApexBasicArea,
  ChartApex,
  ChartApexArea,
  ChartApexBar,
  ChartApexDonut,
  ChartApexPie,
  ChartApexRadial,
  ChartApexGauge,
} from '@components/Chart/apexcharts'
import TabsDefault from '@components/Tabs/Default'
import {
  IconArrowBounce,
  IconHandClick,
  IconReceipt2,
  IconReportAnalytics,
  IconReportMoney,
  IconShoppingBagPlus,
  IconUserCircle,
  IconZoomMoney,
} from '@tabler/icons-react'

export default function Page() {
  function renderChartOne() {
    return (
      <Stack
        key={1}
        justifyContent="space-between"
        direction="column"
        spacing={0}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          spacing={0}
          mb={2}
        >
          <Box>
            <Typography variant="h6">Chart Card</Typography>
          </Box>
          <Box>
            <Cog />
          </Box>
        </Stack>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          sx={{
            '.MuiCardContent-root': {
              paddingTop: 0,
            },
            '.MuiCardHeader-root': {
              paddingBottom: 0,
            },
          }}
        >
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="body2">
                      Visitor
                      <IconUserCircle
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={'bold'}
                      color="var(--secondary)"
                    >
                      123k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApex />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="body2">
                      Summary
                      <IconShoppingBagPlus
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={'bold'}
                      color="var(--secondary)"
                    >
                      22k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexBasicArea />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="body2">
                      Anatomy
                      <IconHandClick
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={'bold'}
                      color="var(--secondary)"
                    >
                      33k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexArea />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="body2">
                      Sales
                      <IconReportMoney
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={'bold'}
                      color="var(--secondary)"
                    >
                      $52,945
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexBar />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    )
  }

  function renderChartTwo() {
    return (
      <Stack
        key={2}
        justifyContent="space-between"
        direction="column"
        spacing={0}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          spacing={0}
          mb={2}
        >
          <Box>
            <Typography variant="h6">Chart Paper</Typography>
          </Box>
          <Box>
            <Cog />
          </Box>
        </Stack>
        <Grid container justifyContent="space-between" spacing={5}>
          <Grid item xl={4}>
            <Stack
              direction={'row'}
              gap={0.5}
              alignItems={'center'}
              justifyItems={'center'}
              mb={1}
            >
              <Box color="success.main">
                <IconReceipt2 size={36} stroke={1.5} />
              </Box>
              <Box color="success.main">
                <Typography
                  fontWeight={'bolder'}
                  fontSize={14}
                  lineHeight={0.5}
                >
                  Sales Summary
                </Typography>
                <Typography variant="caption" color={'secondary.dark'}>
                  10% up since last month
                </Typography>
              </Box>
            </Stack>
            <Paper elevation={2}>
              <ChartApex />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Stack
              direction={'row'}
              gap={0.5}
              alignItems={'center'}
              justifyItems={'center'}
              mb={1}
            >
              <Box color="info.main">
                <IconReportAnalytics size={36} stroke={1.5} />
              </Box>
              <Box color="info.main">
                <Typography
                  fontWeight={'bolder'}
                  fontSize={14}
                  lineHeight={0.5}
                >
                  Analytic Summary
                </Typography>
                <Typography variant="caption" color={'secondary.dark'}>
                  10% up since last month
                </Typography>
              </Box>
            </Stack>
            <Paper elevation={2}>
              <ChartApexBasicArea />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Stack
              direction={'row'}
              gap={0.5}
              alignItems={'center'}
              justifyItems={'center'}
              mb={1}
            >
              <Box color="primary.main">
                <IconZoomMoney size={36} stroke={1.5} />
              </Box>
              <Box color="primary.main">
                <Typography
                  fontWeight={'bolder'}
                  fontSize={14}
                  lineHeight={0.5}
                >
                  Revenue
                </Typography>
                <Typography variant="caption" color={'secondary.dark'}>
                  10% up since last month
                </Typography>
              </Box>
            </Stack>
            <Paper elevation={2}>
              <ChartApexArea />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Stack
              direction={'row'}
              gap={0.5}
              alignItems={'center'}
              justifyItems={'center'}
              mb={1}
            >
              <Box color="error.main">
                <IconArrowBounce size={38} stroke={1.5} />
              </Box>
              <Box color="error.main">
                <Typography
                  fontWeight={'bolder'}
                  fontSize={14}
                  lineHeight={0.5}
                >
                  Turnover
                </Typography>
                <Typography variant="caption" color={'secondary.dark'}>
                  10% up since last month
                </Typography>
              </Box>
            </Stack>
            <Paper elevation={2}>
              <ChartApexBar />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    )
  }

  function renderChartThree() {
    return (
      <Stack
        key={3}
        justifyContent="space-between"
        direction="column"
        spacing={0}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          spacing={0}
          mb={2}
        >
          <Box>
            <Typography variant="h6">Chart Card</Typography>
          </Box>
          <Box>
            <Cog />
          </Box>
        </Stack>
        <Grid container justifyContent="space-between" spacing={5}>
          <Grid item xl={4}>
            <Card sx={{ width: '394px' }}>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="h6">
                      Visitor
                      <IconUserCircle
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography variant="caption" color="var(--secondary)">
                      77k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexDonut />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card sx={{ width: '394px' }}>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="h6">
                      Summary
                      <IconShoppingBagPlus
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography variant="caption" color="var(--secondary)">
                      89k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexPie />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card sx={{ width: '394px' }}>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="h6">
                      Anatomy
                      <IconHandClick
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography variant="caption" color="var(--secondary)">
                      54k
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <ChartApexGauge />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={4} maxWidth={'540px'}>
            <Card sx={{ width: '394px' }}>
              <CardHeader
                title={
                  <Box lineHeight={0}>
                    <Typography variant="h6">
                      Acquisition
                      <IconReportMoney
                        style={{
                          verticalAlign: 'middle',
                          marginLeft: 2,
                          float: 'right',
                        }}
                        color="var(--secondary)"
                        size={24}
                      />
                    </Typography>
                    <Typography variant="caption" color="var(--secondary)">
                      231k
                    </Typography>
                  </Box>
                }
              />
              <ChartApexRadial />
            </Card>
          </Grid>
        </Grid>
      </Stack>
    )
  }

  return (
    <DashboardLayout breadcrumb={[{ name: 'Chart', url: '/chart' }]}>
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
            <TabsDefault
              items={[
                { key: 1, title: 'Chart Paper', item: renderChartOne() },
                { key: 2, title: 'Chart Card', item: renderChartTwo() },
                { key: 3, title: 'Chart Pie', item: renderChartThree() },
              ]}
            />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  )
}
