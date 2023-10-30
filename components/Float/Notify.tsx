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

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

export default function FloatNotify({ show, items }: any) {
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
          {items &&
            items.length &&
            items.map((item: any) => (
              <Grid
                key={item.id}
                container
                spacing={2}
                m={0.5}
                pr={4}
                sx={{
                  bgColor: 'secondary.main',
                }}
              >
                <Grid item component="div">
                  <Avatar
                    sx={{
                      borderWidth: '1px',
                      borderColor: 'secondary.main',
                      borderStyle: 'solid',
                      overflow: 'visible',
                      zIndex: 0,
                      '.MuiBadge-root': { zIndex: 1, right: -10, bottom: -10 },
                    }}
                  >
                    {item.author.slice(0, 1)}
                    <StyledBadge
                      color="success"
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    />
                  </Avatar>
                  {/* <small>21 Second Ago</small> */}
                </Grid>
                <Grid item xs container wrap="wrap">
                  <Typography
                    sx={{ fontWeight: '600' }}
                    variant="caption"
                    component={'p'}
                  >
                    {item.author}
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} variant="caption" component="p">
                    {item.text}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ lineHeight: 1.25, fontWeight: '200' }}
                    variant="subtitle2"
                  >
                    {item.title}
                  </Typography>
                </Grid>
              </Grid>
            ))}
        </Box>
      </Popover>
    </>
  )
}
