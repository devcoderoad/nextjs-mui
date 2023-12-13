'use client'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
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
} from '@components/Chart/apexcharts'
import TabsDefault from '@components/Tabs/Default'
import {
  IconHandClick,
  IconHandTwoFingers,
  IconReportMoney,
  IconShoppingBagPlus,
  IconUser,
  IconUserCircle,
} from '@tabler/icons-react'

export default function Page() {
  function renderChartOne() {
    return (
      <Stack justifyContent="space-between" direction="column" spacing={0}>
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
            <Paper elevation={6}>
              <ChartApexBasicArea />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Paper elevation={6}>
              <ChartApex />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Paper elevation={6}>
              <ChartApexArea />
            </Paper>
          </Grid>
          <Grid item xl={4}>
            <Paper elevation={6}>
              <ChartApexBar />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    )
  }

  function renderChartTwo() {
    return (
      <Stack justifyContent="space-between" direction="column" spacing={0}>
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
            <Card>
              <CardHeader
                title={
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
                }
              />
              <ChartApexBasicArea />
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
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
                }
              />
              <ChartApex />
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
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
                }
              />
              <ChartApexArea />
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h6">
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
                }
              />
              <ChartApexBar />
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
                { key: 3, title: 'Chart JS Three', item: renderChartOne() },
              ]}
            />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  )
}
