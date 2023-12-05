import * as React from 'react'
import {
  Button,
  Box,
  Divider,
  IconButton,
  Link,
  Popover,
  Stack,
  Badge,
  Alert,
  Snackbar,
} from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

/* Components */
import Title from './Title'
import CogDefault from './Cog/Default'

// Generate Order Data
function createData({
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  status,
  amount,
}: {
  id: string
  date: string
  name: string
  shipTo: string
  paymentMethod: string
  status: string
  amount: string
}) {
  return { id, date, name, shipTo, paymentMethod, status, amount }
}

const rows = [
  createData({
    id: '0',
    date: '16 Mar, 2019',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    status: 'warning',
    amount: '312.44',
  }),
  createData({
    id: '1',
    date: '16 Mar, 2019',
    name: 'Paul McCartney',
    shipTo: 'London, UK',
    paymentMethod: 'VISA ⠀•••• 2574',
    status: 'primary',
    amount: '866.99',
  }),
  createData({
    id: '2',
    date: '16 Mar, 2019',
    name: 'Tom Scholz',
    shipTo: 'Boston, MA',
    paymentMethod: 'MC ⠀•••• 1253',
    status: 'info',
    amount: '100.81',
  }),
  createData({
    id: '3',
    date: '16 Mar, 2019',
    name: 'Michael Jackson',
    shipTo: 'Gary, IN',
    paymentMethod: 'AMEX ⠀•••• 2000',
    status: 'success',
    amount: '654.39',
  }),
  createData({
    id: '4',
    date: '15 Mar, 2019',
    name: 'Bruce Springsteen',
    shipTo: 'Long Branch, NJ',
    paymentMethod: 'VISA ⠀•••• 5919',
    status: 'secondary',
    amount: '212.79',
  }),
]

function preventDefault(event: any) {
  event.preventDefault()
}

export default function Orders() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [openSnack, setOpenSnack] = React.useState(false)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCog = (type: string, id: number) => {
    console.log({ type, data: id })
    setOpenSnack(true)
  }

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover-cog-orders' : undefined

  return (
    <Box>
      <Box padding={0} display="flex" justifyContent="space-between">
        <Box>
          <Title>Recent Orders</Title>
        </Box>
        <Box>
          <CogDefault />
        </Box>
      </Box>
      <Box marginTop={2} marginBottom={2}>
        <Table
          size="small"
          sx={{
            'thead > tr:first-child': {
              // backgroundColor: 'secondary.light',
              th: {
                fontWeight: 'bold',
                // color: 'secondary.dark',
              },
            },
            tbody: {
              'tr:nth-child(odd):hover': {
                // backgroundColor: 'secondary.light',
              },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Sale Amount</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{`$${row.amount}`}</TableCell>
                <TableCell align="center">
                  <Badge color={row.status} badgeContent={row.status} />
                </TableCell>
                <TableCell align="center">
                  <CogDefault
                    onRefresh={() => handleCog('refresh', row.id)}
                    onReload={() => handleCog('reload', row.id)}
                    onRemove={() => handleCog('reload', row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Snackbar
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleCloseSnack}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity="warning" sx={{ width: '100%' }} elevation={8}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Box>
      <Link color="primary" href="#" onClick={preventDefault}>
        See more orders
      </Link>
    </Box>
  )
}
