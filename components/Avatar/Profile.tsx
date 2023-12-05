import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Divider,
  Paper,
  Popover,
  Stack,
  Typography,
  ButtonPropsVariantOverrides,
} from '@mui/material'

import { OverridableStringUnion } from '@mui/types'

/* MUI Icons */
import MoreIcon from '@mui/icons-material/MoreVert'
import RefreshIcon from '@mui/icons-material/RefreshOutlined'
import CachedIcon from '@mui/icons-material/CachedOutlined'
import OffIcon from '@mui/icons-material/HighlightOffOutlined'

/* Tabler Icons */
import {
  IconMessage,
  IconPhone,
  IconMail,
  IconMapPin,
  IconDotsVertical,
} from '@tabler/icons-react'

interface OwnProp {
  variant?: OverridableStringUnion<
    'outlined' | 'contained' | 'text',
    ButtonPropsVariantOverrides
  >
  type?: 'primary' | 'warning' | 'info' | 'success'
  cog?: boolean
  items?: string[]
}

export default function Component(props: OwnProp) {
  const { items, cog = false, type = 'primary', variant = 'outlined' } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover-cog' : undefined

  return (
    <Paper
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      {cog ? (
        <Box alignSelf="end">
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
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              padding={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Button variant="text" size="small" startIcon={<RefreshIcon />}>
                Refresh
              </Button>
              <Button variant="text" size="small" startIcon={<CachedIcon />}>
                Reload
              </Button>
              <Button variant="text" size="small" startIcon={<OffIcon />}>
                Remove
              </Button>
            </Stack>
          </Popover>
        </Box>
      ) : (
        ''
      )}
      <Avatar
        src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&h=340&q=80"
        sx={{
          width: '84px',
          height: '84px',
          border: 2,
          mt: 1.7,
          mb: 1,
        }}
      />
      <Typography component="h4" variant="subtitle1">
        Lance Gascoigne
      </Typography>
      <Typography
        component="span"
        variant="subtitle2"
        color="secondary"
        fontWeight={300}
      >
        Web Administrator
      </Typography>
      <Typography component="div" variant="subtitle2" color="secondary">
        <IconMapPin size={18} style={{ verticalAlign: 'middle' }} /> Memphis,
        Tennessee
      </Typography>
      <Divider flexItem textAlign="center" variant="middle" sx={{ my: 1 }} />
      <Box
        sx={{
          my: 1,
          button: { borderRadius: '50px', px: 1.5, mr: 0.75 },
        }}
      >
        <Button
          startIcon={<IconMail size={18} />}
          variant={variant}
          color={type}
          size="small"
        >
          Email
        </Button>
        <Button
          startIcon={<IconPhone size={18} />}
          variant={variant}
          color={type}
          size="small"
        >
          Phone
        </Button>
        <Button
          startIcon={<IconMessage size={18} />}
          variant={variant}
          color={type}
          size="small"
        >
          Chat
        </Button>
      </Box>
    </Paper>
  )
}
