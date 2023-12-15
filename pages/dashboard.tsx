import * as React from 'react'

/* MUI */
import { Button, Box, Grid, Paper, Typography } from '@mui/material'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Balance from '@components/Card/Balance'
import Orders from '@components/Orders'
import DashboardBreadcrumb from '@components/Toolbar/Breadcrumb'
import AvatarProfile from '@components/Avatar/Profile'
import Cog from '@components/Cog/Default'

/* Icons */
import { IconCoin, IconFolderPlus } from '@tabler/icons-react'

/* Components */
import CardStatsDefault from '@components/Stats/Default'
import CardStatsBadged from '@components/Stats/Badge'

function Page() {
  return (
    <>
      <DashboardBreadcrumb />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} xl={12}>
          <CardStatsBadged />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Grid container wrap="wrap" spacing={5} columns={12}>
            <Grid item xs={24}>
              <AvatarProfile variant="contained" cog={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100%',
            }}
          >
            <Box display="flex" justifyContent="space-between" marginBottom={1}>
              <Typography variant="h5" color="secondary">
                Linked Accounts
              </Typography>
              <Cog />
            </Box>
            <Balance />
            <Box display="flex" justifyContent="space-between" marginTop={3}>
              <Button
                size="small"
                variant="outlined"
                startIcon={<IconCoin size={18} />}
              >
                Withdrawal
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ backgroundImage: 'var(--gradient-warning)' }}
                startIcon={<IconFolderPlus size={18} />}
              >
                Add Account
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} xl={4}>
          <CardStatsDefault
            title="Total Views"
            total={19911}
            items={[{ name: 'Swedia', value: 12, type: 'success' }]}
            type="primary"
          />
        </Grid>
        <Grid item xs={12} xl={4}>
          <CardStatsDefault
            title="Total Views"
            total={2313}
            items={[{ name: 'Global', value: 90, type: 'primary' }]}
            type="primary"
          />
        </Grid>
        <Grid item xs={12} xl={4}>
          <CardStatsDefault type="warning" total={1701} />
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Page />
    </DashboardLayout>
  )
}
