import * as React from 'react'

/* MUI */
import { Box, Button, IconButton, Divider, Popover, Stack } from '@mui/material'

/* Icons */
import {
  IconRefresh,
  IconRotateClockwise,
  IconOutbound,
  IconDotsVertical,
} from '@tabler/icons-react'

interface TCogDefault {
  type?: string[] | undefined
  mode?: string[] | undefined
}

type ActionProps = {
  onClose?(): void // on close popup
  onRefresh?(): void // on refresh function
  onReload?(): void // on reload function
  onRemove?(): void // on remove function
}

export default function Component(props: TCogDefault & ActionProps) {
  const { type = '', mode = '', onClose, onRefresh, onReload, onRemove } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const stack = type ? 'row' : 'column'
  const divider = stack === 'row' ? 'vertical' : 'horizontal'

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    onClose?.()
  }

  const handleRefresh = () => {
    onRefresh?.()
    handleClose()
  }

  const handleReload = () => {
    onReload?.()
    handleClose()
  }
  const handleRemove = () => {
    onRemove?.()
    handleClose()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover-cog-default' : undefined

  return (
    <Box alignSelf="start">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <IconDotsVertical size={18} />
      </IconButton>
      <Popover
        marginThreshold={0}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        elevation={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack
          direction={stack}
          spacing={1}
          padding={1}
          divider={<Divider orientation={divider} flexItem />}
        >
          <Button
            variant="text"
            startIcon={<IconRefresh size={18} />}
            size="small"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
          <Button
            variant="text"
            startIcon={<IconRotateClockwise size={18} />}
            size="small"
            onClick={handleReload}
          >
            Reload
          </Button>
          <Button
            variant="text"
            startIcon={<IconOutbound size={18} />}
            size="small"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </Stack>
      </Popover>
    </Box>
  )
}
