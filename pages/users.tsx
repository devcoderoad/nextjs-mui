import * as React from 'react'

/* MUI */
import {
  Box,
  Stack,
  Paper,
  Grid,
  Typography,
  Toolbar,
  Link,
  Button,
  Divider,
} from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'

// import Paper from "@mui/material/Paper";

import CommentIcon from '@mui/icons-material/CommentBankOutlined'
import CircleIcon from '@mui/icons-material/CircleOutlined'
import AddCardIcon from '@mui/icons-material/AddCardOutlined'
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlined'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CommentBankIcon from '@mui/icons-material/CommentBank'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'

/* Components */
import Deposit from '@components/Deposit'
import Orders from '@components/Orders'
import AvatarProfile from '@components/Avatar/Profile'
import Cog from '@components/Cog/Default'

export default function Page() {
  const dataTasks = [
    {
      id: 1,
      title: 'Transfer Approval',
      type: 'danger',
      icon: (
        <AccountBalanceIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
      ),
      description:
        'Request for Approval to <b>Bank Solutions LTD  </b> AccNo: <b>9833-2342-2421</b>',
      action: 'Approve',
      createdAt: 'Jun 10, 2021 at 9:08 AM',
    },
    {
      id: 2,
      title: 'Deposit Approval',
      type: 'success',
      icon: (
        <CommentBankIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
      ),
      description:
        'Request <b>$9,300.020</b> for Deposit from AccNo: <b>9892-1234-123</b>',
      action: 'Approve',
      createdAt: 'May 3, 2021 at 7:08 AM',
    },
    {
      id: 3,
      title: 'Transfer Approval',
      type: 'danger',
      icon: (
        <AccountBalanceIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
      ),
      description:
        'Request for Approval to <b>Bank Solutions LTD</b> AccNo: <b>3525-1551-2323</b>',
      action: 'Approve',
      createdAt: 'April 1, 2021 at 6:01 AM',
    },
    {
      id: 4,
      title: 'Transfer In',
      type: 'info',
      icon: (
        <AddchartOutlinedIcon
          fontSize="small"
          sx={{ verticalAlign: 'middle' }}
        />
      ),
      description:
        'Transfer In for <b>$1,000.000</b> from AccNo: <b>9892-1234-123</b>',
      action: 'Check',
      createdAt: 'March 4, 2021 at 7:12 AM',
    },
    {
      id: 5,
      title: 'Deposit Approval',
      type: 'success',
      icon: (
        <CommentBankIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
      ),
      description:
        'Request <b>$1,000.000</b> for Deposit from AccNo: <b>9892-1234-123</b>',
      action: 'Approve',
      createdAt: 'March 1, 2021 at 10:12 AM',
    },
  ]

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('ButterMilk', 126, 11.0, 9, 2.9),
    createData('Doughnut', 262, 16.0, 24, 6.0),
    createData('Pizza', 305, 3.7, 67, 4.3),
    createData('Burger', 356, 16.0, 49, 3.9),
  ]
  return (
    <DashboardLayout>
      <Toolbar disableGutters component="nav">
        <Link
          href="/profile"
          variant="subtitle2"
          color="secondary.main"
          sx={{
            textDecoration: 'none',
            mr: 2,
            svg: { verticalAlign: 'middle', mr: 1 },
          }}
        >
          <PersonIcon fontSize="small" />
          Profile
        </Link>
        <Divider orientation="vertical" variant="middle" />
        <Typography
          variant="subtitle2"
          color="secondary.main"
          sx={{
            textDecoration: 'none',
            mr: 2,
            svg: { verticalAlign: 'middle', mr: 1 },
          }}
        >
          <PeopleAltIcon fontSize="small" />
          New Signing
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        {[0, 1, 2, 3].map((_, i) => (
          <Grid key={i++} item xs={12} sm={12} lg={3}>
            <AvatarProfile />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
