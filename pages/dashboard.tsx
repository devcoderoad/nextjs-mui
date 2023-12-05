import * as React from 'react'

/* MUI */
import {
  Avatar,
  Button,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  IconButton,
  Popover,
  Stack,
  Badge,
  LinearProgress,
} from '@mui/material'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Balance from '@components/Card/Balance'
import Orders from '@components/Orders'
import DashboardToolbar from '@components/Toolbar/Dashboard'
import AvatarProfile from '@components/Avatar/Profile'
import Cog from '@components/Cog/Default'

import shadows from '@mui/material/styles/shadows'
/* Icons */
import { IconCoin, IconUsers, IconFolderPlus } from '@tabler/icons-react'

/* Components */
import CardStatsDefault from '@components/Stats/Default'
import CardStatsBadged from '@components/Stats/Badge'

/* Styles */
import { styledPaper } from '@src/styles'

function Page() {
  return (
    <>
      <DashboardToolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} xl={12}>
          <CardStatsBadged />
          {/* <Grid container spacing={2} columns={12}>
            <Grid item md={4} xs={12}>
              <Paper sx={styledPaper}>
                <Typography color="secondary">
                  <Badge
                    color="secondary"
                    badgeContent=" "
                    variant="dot"
                    sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Organic Search Traffic
                </Typography>
                <Typography
                  color={'primary'}
                  component={'h2'}
                  fontSize={'28px'}
                  fontWeight={'900'}
                  sx={{ display: 'inline', mr: 0.5 }}
                >
                  278%
                </Typography>
                <small style={{ color: 'red' }}>-17%</small>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper sx={styledPaper}>
                <Typography color="secondary">
                  <Badge
                    color="warning"
                    badgeContent=" "
                    variant="dot"
                    sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Paid Search Traffic
                </Typography>
                <Typography
                  color={'orange'}
                  component={'h2'}
                  fontSize={'28px'}
                  fontWeight={'900'}
                  sx={{ display: 'inline', mr: 0.5 }}
                >
                  45%
                </Typography>
                <small style={{ color: 'green' }}>+4%</small>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper sx={styledPaper}>
                <Typography color="secondary">
                  <Badge
                    color="info"
                    badgeContent=" "
                    variant="dot"
                    sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Backlinks
                </Typography>
                <Typography
                  color={'#2e9cf2'}
                  component={'h2'}
                  fontSize={'28px'}
                  fontWeight={'900'}
                  sx={{ display: 'inline', mr: 0.5 }}
                >
                  278%
                </Typography>
                <small style={{ color: '#2e9cf2' }}>-17%</small>
              </Paper>
            </Grid>
          </Grid> */}
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
            total={9991}
            items={[
              { name: 'Swedia', value: 12, type: 'success' },
              // { name: 'Global', value: 20, type: 'warning' },
              // { name: 'Finland', value: 88, type: 'info' },
              // { name: 'Italy', value: 20, type: 'primary' },
            ]}
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
          <CardStatsDefault type="warning" total={1001} />
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
