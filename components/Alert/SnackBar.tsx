import * as React from 'react'

import MuiAlert, {
  AlertColor,
  AlertProps,
  AlertPropsVariantOverrides,
} from '@mui/material/Alert'

import { OverridableStringUnion } from '@mui/types'
import { Snackbar, AlertTitle, Collapse } from '@mui/material'
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
} from '@tabler/icons-react'

const Alert = React.forwardRef(function Alert(
  props: React.PropsWithChildren & AlertProps,
  ref: any
) {
  return <MuiAlert elevation={1} ref={ref} variant="standard" {...props} />
})

const modeRecord: Record<
  OverridableStringUnion<AlertColor>,
  React.CSSProperties
> = {
  success: {
    color: 'var(--success)',
  },
  warning: {
    color: 'var(--warning)',
  },
  info: {
    color: 'var(--info)',
  },
  error: {
    color: 'var(--error)',
  },
}

const iconRecord: Record<
  OverridableStringUnion<AlertColor>,
  React.ReactElement
> = {
  success: <IconExclamationCircle size={28} />,
  warning: <IconCircleCheck size={28} />,
  info: <IconInfoCircle size={28} />,
  error: <IconAlertTriangle size={28} />,
}

interface OwnProps {
  title?: string
  type?: 'fixed' | 'relative'
  message?: string
  mode?: AlertColor
  variant?:
    | OverridableStringUnion<
        'outlined' | 'filled' | 'standard',
        AlertPropsVariantOverrides
      >
    | undefined
}

export default function SnackBar(props: OwnProps) {
  const {
    title = '',
    message = 'This is a success message!',
    mode = 'error',
    type = 'fixed',
    variant = 'standard',
  } = props
  const [open, setOpen] = React.useState(true)

  const handleCloseAlert = () => {
    setOpen(false)
  }

  const onCloseBar = () => {
    setOpen(!open)
  }

  const renderAlert = () => (
    <Collapse in={open}>
      <Alert
        onClose={handleCloseAlert}
        severity={mode}
        sx={{ ...modeRecord[mode] }}
        iconMapping={{ [mode]: iconRecord[mode] }}
        elevation={4}
        variant={variant}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  )

  return type === 'fixed' ? (
    <Snackbar
      sx={{ position: 'fixed', marginTop: '2rem', float: 'right' }}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onCloseBar}
      key="top-right"
    >
      {renderAlert()}
    </Snackbar>
  ) : (
    renderAlert()
  )
}
