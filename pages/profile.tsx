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
          <CircleIcon fontSize="small" />
          Profile
        </Link>
        <Typography
          variant="subtitle2"
          color="secondary.main"
          sx={{
            textDecoration: 'none',
            mr: 2,
            svg: { verticalAlign: 'middle', mr: 1 },
          }}
        >
          <CommentIcon fontSize="small" />
          Hi, Administrator
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4}>
          <AvatarProfile />
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
            <Deposit />
            <Box marginY={2}>
              <Button
                size="small"
                variant="contained"
                color="success"
                endIcon={<AddCardIcon />}
              >
                Add Account
              </Button>
              {/* <GroupButton /> */}
            </Box>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // alignContent="center"
              // verticalAlign="top"
            >
              <Typography
                component="h3"
                variant="h7"
                paddingBottom={1}
                color="secondary.dark"
              >
                Tasks
              </Typography>
              <Cog />
            </Box>
            <Grid container fontSize="small">
              <Grid item xs={12}>
                {dataTasks &&
                  dataTasks.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="top"
                        border={1}
                        borderColor="secondary.light"
                        paddingY={1}
                        paddingX={2}
                        sx={{
                          cursor: 'pointer',
                          transition: '.15s ease',
                          ':hover': {
                            bgcolor: 'secondary.light',
                            boxShadow: '2px 2px 10px #cccccc',
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        <Stack mr={2}>
                          <Typography
                            color={`${item.type}.main`}
                            component="h5"
                            fontWeight="600"
                          >
                            {item.icon} {item.title}
                          </Typography>
                          <Box color="secondary.dark" mt={0.25}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </Box>
                        </Stack>
                        <Stack alignItems="end">
                          <Box component="div" color="secondary.main">
                            {item.createdAt}
                          </Box>
                          <Button
                            variant="text"
                            size="small"
                            color={item.type}
                            startIcon={<CheckBoxIcon />}
                          >
                            {item.action}
                          </Button>
                        </Stack>
                      </Box>
                    )
                  })}
                <Box textAlign="right" color="secondary">
                  <Link href="#">see all</Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <Typography
              component="h3"
              variant="h7"
              paddingBottom={1}
              color="secondary.dark"
            >
              Projects
            </Typography>
            <Grid container fontSize="small">
              <Grid container fontSize="small">
                <Grid item xs={12}>
                  {/* {dataTasks &&
                    dataTasks.map((item) => {
                      return (
                        <Box
                          key={item.id}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          border={1}
                          borderColor="secondary.light"
                          paddingY={1}
                          paddingX={2}
                          sx={{
                            transition: ".15s ease",
                            cursor: "pointer",
                            ":hover": {
                              bgcolor: "secondary.light",
                              boxShadow: "2px 2px 10px #cccccc",
                              transform: "translateY(-5px)",
                            },
                          }}
                        >
                          <Stack mr={2}>
                            <Typography
                              color={`${item.type}.main`}
                              component="h5"
                              fontWeight="600"
                            >
                              {item.icon} {item.title}
                            </Typography>
                            <Box color="secondary.dark">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </Box>
                          </Stack>
                          <Box component="span">{item.createAt}</Box>
                          <Button
                            variant="text"
                            size="small"
                            color={item.type}
                            startIcon={<CheckBoxIcon />}
                          >
                            {item.action}
                          </Button>
                        </Box>
                      );
                    })} */}
                  <TableContainer>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            hover
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {/* <TablePagination
                      rowsPerPageOptions={[3, 6, { value: -1, label: "All" }]}
                      count={rows.length}
                    /> */}
                  </TableContainer>
                  <Box textAlign="right" color="secondary">
                    <Link href="#">see all</Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
