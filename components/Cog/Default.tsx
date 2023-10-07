import * as React from 'react'

import { Box, Button, IconButton, Divider, Popover, Stack } from '@mui/material'

import MoreIcon from '@mui/icons-material/MoreVert'
import RefreshIcon from '@mui/icons-material/RefreshOutlined'
import CachedIcon from '@mui/icons-material/CachedOutlined'
import OffIcon from '@mui/icons-material/HighlightOffOutlined'

export default function Component(props: any) {
  const { type = '', mode = '', children = null } = props
  const [anchorEl, setAnchorEl] = React.useState(null)
  const stack = type ? 'row' : 'column'
  const divider = stack === 'row' ? 'vertical' : 'horizontal'

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover-cog-default' : undefined

  return (
    <Box alignSelf="start">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <MoreIcon />
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
          <Button variant="text" startIcon={<RefreshIcon />}>
            Refresh
          </Button>
          <Button variant="text" startIcon={<CachedIcon />}>
            Reload
          </Button>
          <Button variant="text" startIcon={<OffIcon />}>
            Remove
          </Button>
        </Stack>
      </Popover>
    </Box>
  )
}
