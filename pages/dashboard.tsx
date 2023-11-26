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
} from '@mui/material'

/* Icons */
import MoreIcon from '@mui/icons-material/MoreVert'
import RefreshIcon from '@mui/icons-material/RefreshOutlined'
import CachedIcon from '@mui/icons-material/CachedOutlined'
import OffIcon from '@mui/icons-material/HighlightOffOutlined'
import AddCardIcon from '@mui/icons-material/AddCardOutlined'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Balance from '@components/Card/Balance'
import Orders from '@components/Orders'
import DashboardToolbar from '@components/Toolbar/Dashboard'
import AvatarProfile from '@components/Avatar/Profile'
import Cog from '@components/Cog/Default'

import shadows from '@mui/material/styles/shadows'
import { IconCoin } from '@tabler/icons-react'

/* Styles */
import { styledPaper } from '@src/styles'

export default function Page() {
  return (
    <DashboardLayout>
      <DashboardToolbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            <Grid item md={4} xs={12}>
              <Paper sx={styledPaper}>
                <Typography color="secondary">
                  <Badge
                    color="secondary"
                    badgeContent=" "
                    variant="dot"
                    sx={{ mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Organic Search Traffic
                </Typography>
                <Typography
                  color={'primary'}
                  component={'h2'}
                  fontSize={'34px'}
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
                    sx={{ mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Paid Search Traffic
                </Typography>
                <Typography
                  color={'orange'}
                  component={'h2'}
                  fontSize={'34px'}
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
                    color="secondary"
                    badgeContent=" "
                    variant="dot"
                    sx={{ mr: 1.25, verticalAlign: 'middle' }}
                  />
                  Backlinks
                </Typography>
                <Typography
                  color={'primary'}
                  component={'h2'}
                  fontSize={'34px'}
                  fontWeight={'900'}
                  sx={{ display: 'inline', mr: 0.5 }}
                >
                  278%
                </Typography>
                <small style={{ color: 'red' }}>-17%</small>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Grid container wrap="wrap" spacing={5} columns={12}>
            <Grid item xs={24}>
              <AvatarProfile cog={true} />
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
              <Typography component="h6" variant="h5" color="secondary">
                Linked Accounts
              </Typography>
              <Cog />
            </Box>
            <Balance />
            <Box marginY={2}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ backgroundImage: 'var(--gradient-warning)' }}
                  startIcon={<AddCardIcon />}
                >
                  Add Account
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<IconCoin stroke={1.2} />}
                >
                  Withdrawal
                </Button>
              </Stack>

              {/* <GroupButton /> */}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
