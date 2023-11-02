import React from 'react'

import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

import NotificationsIcon from '@mui/icons-material/Notifications'
import {
  Box,
  Fab,
  Button,
  Fade,
  Grid,
  Avatar,
  IconButton,
  Badge,
  Divider,
  styled,
} from '@mui/material'

/* Components */
import Messages from '@components/Message/User'

export default function FloatNotify({
  show,
  items,
}: {
  show: any
  items: {
    author: string
    title: string
    text: string
  }[]
}) {
  const [anchorEl, setAnchorEl] = React.useState(show)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          maxHeight: '400px',
          '.MuiPaper-root': {
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            '.MuiList-root': {
              overflow: 'hidden',
              paddingTop: 0,
              paddingBottom: 0,
            },
            overflow: 'visible',
            maxHeight: '100%',
          },
          top: 10,
          right: -20,
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.2))',
        }}
      >
        <Box
          sx={{
            width: '320px',
            height: '320px',
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            fontSize="small"
            sx={{ a: { textDecoration: 'none' } }}
          >
            <Box my={1} mx={2} component="span">
              Messages:
            </Box>
            <Box my={1} mx={2} component="span">
              <a href="#">See all</a>
            </Box>
          </Grid>
          <Divider />
          <Messages />
        </Box>
      </Popover>
    </>
  )
}
