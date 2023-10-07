import * as React from 'react'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Box from '@mui/material/Box'

const Alert = React.forwardRef(function Alert(
  props: React.PropsWithChildren & AlertProps,
  ref: any
) {
  return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />
})

export default function SnackBar(props: any) {
  const { title = '', message = '' } = props
  const [open, setOpen] = React.useState(true)
  const [alertOpen, setAlertOpen] = React.useState(true)

  const handleCloseAlert = () => {
    setOpen(false)
  }

  const onCloseBar = () => {
    setOpen(!open)
  }

  return (
    <Snackbar
      sx={{ position: 'fixed', marginTop: '2rem', float: 'right' }}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onCloseBar}
      key="top-right"
    >
      <Alert onClose={() => handleCloseAlert()} severity="warning">
        This is a success message!
      </Alert>
    </Snackbar>
  )
}
