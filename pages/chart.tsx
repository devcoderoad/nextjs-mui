'use client'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'

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

export default function Page() {
  function renderChart() {
    return (
      <Stack justifyContent="space-between" direction="column" spacing={0}>
        <Stack justifyContent="space-between" direction="row" spacing={0}>
          <Box>
            <Typography component="h4" variant="body1">
              Chart
            </Typography>
          </Box>
          <Box>
            <Cog />
          </Box>
        </Stack>
        <Box>
          <ChartApexBasicArea />
        </Box>
        <Box>
          <ChartApex />
        </Box>
        <Box>
          <ChartApexArea />
        </Box>
        <Box>
          <ChartApexBar />
        </Box>
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
                { key: 1, title: 'Chart JS', item: renderChart() },
                { key: 2, title: 'Chart JS Two', item: renderChart() },
                { key: 3, title: 'Chart JS Three', item: renderChart() },
              ]}
            />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  )
}
