import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

/* Components */
import { ClickAwayListener } from '@mui/base'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Stack from '@mui/material/Stack'

import {
  Container,
  Box,
  Toolbar,
  List,
  Typography,
  Input,
  Divider,
  IconButton,
  Link,
  useMediaQuery,
} from '@mui/material'

/* Icons */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import AccountIcon from '@mui/icons-material/AccountCircle'
import SettingIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/LogoutRounded'

/* Components */
import {
  mainListItems,
  secondaryListItems,
  thirdListItems,
} from '@components/ListMenu/listItems'

import AlertBar from '@components/Alert/SnackBar'
import Copyright from '@components/Copyright'
import FloatConfig from '@components/Float/Config'
import FloatNotify from '@components/Float/Notify'
import ScrollToTop from '@components/Scroll/ToTop'
import { ToggleColor } from '@components/Toggle/Color'

/* Config */
import { constant } from '@config/constants'
import { CommonProps } from '@mui/material/OverridableComponent'
import { signOut } from 'next-auth/react'

const drawerWidth = 240

interface OwnProps extends CommonProps {
  open: boolean
  theme?: any
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: OwnProps) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

function DashboardContent({ children }: React.PropsWithChildren): JSX.Element {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true })

  const [open, setOpen] = React.useState<boolean>(true)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [openNotify, setOpenNotify] = React.useState(false)

  const style = React.useMemo(
    () => ({
      boxSearch: {
        '& .MuiTextField-root': { m: 2, width: '12ch' },
      },
      drawer: {
        boxShadow: '0 .3rem .8rem rgba(0, 0, 0, .12)',
        transition: 'all .2s ease-out',
        zIndex: 11,
        border: 0,
      },
      drawerPaper: {
        '.MuiDrawer-paper': {
          width: '58px',
          position: 'relative',
        },
      },
      dividerArrow: {
        display: 'block',
        margin: '12px 7px 0 5px',
        width: '10px',
        height: '10px',
        borderWidth: 0,
        borderStyle: 'none',
        borderColor: 'none',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        transform: 'rotate(135deg) translate(7px,7px)',
      },
      menuPaperProps: {
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
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
        },
      },
      menuProfile: {
        a: { textDecoration: 'none' },
        svg: { fontSize: 'large', verticalAlign: 'middle', mr: 0.5 },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: [1],
        a: {
          transition: 'all .5s ease',
          verticalAlign: 'middle',
          ml: 1.5,
          ':hover': {
            filter: 'brightness(1.35);',
          },
        },
      },
      toolbarNav: {
        pr: '24px',
        boxShadow: 'none',
        textTransform: 'uppercase',
        backgroundColor: theme.palette.mode === 'dark' ? '#232323' : 'white',
        color: theme.palette.mode === 'dark' ? 'white' : 'gray',
      },
    }),
    [theme.palette.mode]
  )

  React.useEffect(() => {
    setOpenNotify(false)
  }, [])

  React.useEffect(() => {
    if (match) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [match])

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleChange = (event: any) => {
    /* setAuth(event.target.checked) */
  }

  const handleMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.target as any)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const itemsNotify = [
    {
      id: 1,
      author: 'Mr. Dimsum',
      title: 'Completely synergize resource taxing relationships',
      text: 'Interactively coordinate proactive e-commerce via process-centric thinking. Completely pursue scalable customer service through sustainable potentialities. Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or sources.',
    },
    {
      id: 2,
      author: 'Ms Diane Flock',
      title:
        'Objectively innovate empowered manufactured products whereas parallel',
      text: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.',
    },
    {
      id: 3,
      author: 'Lamelo Ball',
      title:
        'Proactively envisioned multimedia based expertise and cross-media growth strategies',
      text: 'Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.',
    },
    {
      id: 4,
      author: 'Andre Vicks',
      title:
        'Phosfluorescently engage worldwide methodologies with web-enabled technology',
      text: 'Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
    },
  ]

  const handleLogout = () => {
    signOut({ callbackUrl: '/auth/signin' })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        // '.MuiToolbar-root .MuiToolbar-gutters .MuiToolbar-regular': {
        //   backgroundColor: 'none !important',
        // },
      }}
    >
      <AppBar
        position="absolute"
        open={open}
        enableColorOnDark
        elevation={0}
        color="primary"
        style={{ backgroundColor: 'transparent' }}
      >
        <Toolbar sx={style.toolbarNav} component={'nav'}>
          <Box
            display="flex"
            sx={{
              textDecoration: 'none',
              flexGrow: 1,
              justifyContent: 'start',
              verticalAlign: 'middle',
              alignItems: 'center',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              href="/"
              sx={{
                marginLeft: 0,
                marginRight: '.75rem',
              }}
            >
              <HomeIcon fontSize="small" />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={style.dividerArrow}
            />
            <Typography
              component="a"
              href="/"
              variant="subtitle1"
              color="inherit"
              noWrap
              sx={{ textDecoration: 'none' }}
            >
              Dashboard
            </Typography>
          </Box>
          <Stack spacing={{ md: 0 }} direction="row">
            <ClickAwayListener onClickAway={() => setSearchOpen(false)}>
              <Box display={'flex'} alignItems={'center'}>
                <IconButton
                  color="inherit"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <SearchIcon fontSize="medium" />
                </IconButton>
                {searchOpen ? (
                  <Box
                    component="form"
                    sx={style.boxSearch}
                    noValidate
                    autoComplete="off"
                  >
                    <Input size="small" placeholder="Search.." autoFocus />
                  </Box>
                ) : (
                  ''
                )}
              </Box>
            </ClickAwayListener>
            <FloatNotify show={openNotify} items={itemsNotify} />
            <IconButton
              color="inherit"
              aria-label="profile of current user"
              aria-controls="menu-appbar-profile"
              aria-haspopup="true"
              onClick={handleMenuProfile}
            >
              <AccountIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Menu
            id="menu-appbar-profile"
            keepMounted
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={style.menuProfile}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem dense onClick={handleClose}>
              <Link href="/profile">
                <AccountIcon /> Profile
              </Link>
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              <Link href="/setting">
                <SettingIcon /> Settings
              </Link>
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              <Link onClick={handleLogout}>
                <LogoutIcon /> Logout
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          ...style.drawer,
          ...(!open && { ...style.drawerPaper }),
        }}
      >
        <Toolbar sx={style.toolbar}>
          <Link href="/">
            <img
              src="/logo.svg"
              alt={constant.siteName}
              height={24}
              style={{ verticalAlign: 'middle' }}
            />
          </Link>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          component="nav"
          sx={{
            px: open ? '.75rem' : 0,
            '.MuiButtonBase-root': {
              textDecoration: 'none',
              borderRadius: open ? '2rem' : 0,
              transition: 'all .2s ease-out',
            },
            '.MuiListItemIcon-root': {
              minWidth: '42px',
            },
          }}
        >
          {mainListItems(open)}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems(open)}
          <Divider sx={{ my: 1 }} />
          {thirdListItems(open)}
        </List>
      </Drawer>
      <Box
        id="back-to-top-anchor"
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 2, mb: 4, pt: 6 }}>
          <AlertBar
            hidden={false}
            content={{ title: '', description: '', type: '' }}
          />
          <FloatConfig />
          {children}
          <Copyright />
          <ScrollToTop />
          <ToggleColor />
        </Container>
      </Box>
    </Box>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactElement | React.ReactElement[]
}) {
  return <DashboardContent>{children}</DashboardContent>
}
