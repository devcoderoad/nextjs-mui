import * as React from 'react'

import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'

import { OverridableStringUnion } from '@mui/types'
import {
  Snackbar,
  AlertTitle,
  Fade,
  IconButton,
  SnackbarProps,
  BoxProps,
} from '@mui/material'
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react'

const Alert = React.forwardRef(function Alert(
  props: React.PropsWithChildren & AlertProps,
  ref: any
) {
  return (
    <MuiAlert
      // elevation={2}
      ref={ref}
      variant="standard"
      // action={
      //   <IconButton
      //     aria-label="close"
      //     color="inherit"
      //     size="small"
      //     // onClick={() => setOpen(false)}
      //   >
      //     <IconX size={16} />
      //   </IconButton>
      // }
      {...props}
    />
  )
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
  success: <IconExclamationCircle size={26} />,
  warning: <IconCircleCheck size={26} />,
  info: <IconInfoCircle size={26} />,
  error: <IconAlertTriangle size={26} />,
}

interface OwnProps {
  title?: string
  type?: 'fixed' | 'relative'
  message?: string | JSX.Element
  mode?: AlertColor
  variant?: 'standard' | 'filled' | 'outlined'
  closeButton?: boolean
}

export default function AlertSnackBar(
  props: OwnProps & SnackbarProps & BoxProps
) {
  const {
    title = '',
    message = 'This is a success message!',
    mode = 'success',
    type = 'fixed',
    variant = 'standard',
    closeButton = false,
    ...rest
  } = props
  const [open, setOpen] = React.useState(true)

  const handleCloseAlert = () => {
    setOpen(false)
  }

  const onCloseBar = () => {
    setOpen(false)
  }

  const renderAlert = () => (
    <Fade in={open} {...rest}>
      <Alert
        {...(closeButton
          ? {
              onClose: () => {
                handleCloseAlert()
              },
              // action: (
              //   <IconButton
              //     aria-label="close"
              //     color="inherit"
              //     size="small"
              //     onClick={() => handleCloseAlert()}
              //   >
              //     <IconX size={16} style={{ ...modeRecord[mode] }} />
              //   </IconButton>
              // ),
            }
          : null)}
        severity={mode}
        sx={{
          ...modeRecord[mode],
          '.MuiButtonBase-root': { transform: 'scale(0.75)' },
          /* '.MuiTypography-root': { ...modeRecord[mode] }, */
        }}
        iconMapping={{ [mode]: iconRecord[mode] }}
        elevation={1}
        variant={variant}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Fade>
  )

  return type === 'fixed' ? (
    <Snackbar
      sx={{ position: 'fixed', marginTop: '2rem', float: 'right' }}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={onCloseBar}
      key={`top-right-${title}`}
      {...rest}
    >
      {renderAlert()}
    </Snackbar>
  ) : (
    renderAlert()
  )
}
