import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

/* Components */
import { ClickAwayListener } from '@mui/base'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarOwnProps, AppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Stack from '@mui/material/Stack'
// import Slide from '@mui/material/Slide'

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
  Badge,
  Avatar,
  Popover,
  Slide,
} from '@mui/material'

import useScrollTrigger from '@mui/material/useScrollTrigger'

/* ================ Icons ================ */

/* Tabler Icons */
import { IconApps } from '@tabler/icons-react'
import { IconLogout } from '@tabler/icons-react'
import { IconSettingsCog } from '@tabler/icons-react'
import { IconUserCircle } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'
import { IconHome } from '@tabler/icons-react'
import { IconChevronLeft } from '@tabler/icons-react'

/* ================ Components ================ */

/* Components */
import {
  mainListItems,
  secondaryListItems,
  thirdListItems,
} from '@components/ListMenu/listItems'

import AlertSnackBar from '@components/Alert/SnackBar'
import Copyright from '@components/Copyright'
import FloatConfig from '@components/Float/Config'
import FloatNotify from '@components/Float/Notify'
import FloatMessages from '@components/Float/Messages'
import ScrollToTop from '@components/Scroll/ToTop'
import { ToggleColor } from '@components/Toggle/Color'

/* Config */
import { constant } from '@config/constants'
import { CommonProps } from '@mui/material/OverridableComponent'
import { signOut, useSession } from 'next-auth/react'

/* routes */
import { routeSecondary } from '@config/routes'
import { PropsWithChildren } from 'react'

const drawerWidth = 240

interface CrumbProps {
  breadcrumb?: {
    name?: string
    url?: string
  }[]
}
interface OwnProps extends CrumbProps {
  // children?: React.ReactElement | null | undefined
  open: boolean
  theme?: any
}

interface ScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children?: React.ReactElement
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

function DashboardContent(
  props: PropsWithChildren<CrumbProps & ScrollProps & CommonProps>
) {
  const {
    breadcrumb = [{ name: 'Dashboard', url: '/dashboard' }],
    children,
    window,
  } = props
  const { data: session, status } = useSession()

  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true })
  const [open, setOpen] = React.useState<boolean>(true)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [openNotify, setOpenNotify] = React.useState(false)
  const [isDrawerHover, setIsDrawerHover] = React.useState(false)
  const [storage, setStorage] = React.useState<{ drawer: string }>()

  const user = React.useMemo(
    () => ({
      ...session?.user,
    }),
    [session]
  )

  const style = React.useMemo(
    () => ({
      boxSearch: {
        '& .MuiTextField-root': { m: 2, width: '12ch' },
      },
      openFormBox: {
        // '.MuiIconButton-root, .MuiInputBase-input': {
        // borderRadius: 0,
        // backgroundColor: 'white',
        // borderRightRadius: 0,
        // borderRightBottomRadius: 0,
        // },
        // boxShadow: '0 .3rem .8rem rgba(0, 0, 0, .12)',
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
        margin: '10px 0px 0 15px',
        width: '8px',
        height: '8px',
        borderWidth: 0,
        borderStyle: 'none',
        borderColor: 'none',
        borderTop: '0.5px solid #000',
        borderLeft: '0.5px solid #000',
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
      menuHasPopup: {
        a: { textDecoration: 'none' },
        svg: { fontSize: 'large', verticalAlign: 'middle', mr: 0.5 },
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
          // transformOrigin: { horizontal: 'right', vertical: 'top' },
          // anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          overflow: 'visible',
          maxHeight: '100%',
        },
        // overflow: 'hidden',
        top: 10,
        right: -20,
        overflow: 'visible',
        // filter: 'drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, .15))',
        '&.appbar-widget': {
          '.MuiMenu-paper': {
            width: '250px',
            // transformOrigin: { horizontal: 'right', vertical: 'top' },
            // anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          },
          '.MuiPopover-paper': {
            paddingTop: 0,
            paddingBottom: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'start',
            '.MuiMenuItem-root': {
              '.MuiLink-root': {
                marginTop: '.5rem',
                marginBottom: '.5rem',
                display: 'grid',
                justifyItems: 'center',
                justifyContent: 'start',
              },
              flexGrow: 0,
              flexBasis: '33.3%',
              maxWidth: '33.3%',
              justifyContent: 'center',
            },
          },
          '.MuiButtonBase-root': {
            svg: { transition: 'transform .2s ease' },
            '&:hover': {
              svg: {
                transform: 'scale(1.2)',
                color: 'secondary.main',
              },
              backgroundColor: 'transparent',
            },
          },
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // background: 'transparent',
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
        // boxShadow: 'none',
        // shadow: 2,
        textTransform: 'uppercase',
        backgroundColor: theme.palette.mode === 'dark' ? '#232323' : 'white',
        color: theme.palette.mode === 'dark' ? 'white' : 'gray',
        // backgroundColor: 'transparent',
      },
    }),
    [theme.palette.mode]
  )

  // const [scrollDir, setScrollDir] = React.useState('scrolling down')

  // React.useEffect(() => {
  //   const threshold = 0
  //   let lastScrollY = window.pageYOffset
  //   let ticking = false

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false
  //       return
  //     }
  //     setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
  //     lastScrollY = scrollY > 0 ? scrollY : 0
  //     ticking = false
  //   }

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir)
  //       ticking = true
  //     }
  //   }

  //   window.addEventListener('scroll', onScroll)
  //   console.log(scrollDir)
  //   // console.log(window)

  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [scrollDir])

  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  // })

  // console.log(trigger)

  React.useEffect(() => {
    const drawer = JSON.parse(localStorage.getItem('finDash') as string)
    if (drawer) {
      setStorage({ drawer: drawer.drawer })
    } else {
      localStorage.setItem('finDash', JSON.stringify({ drawer: false }))
    }
  }, [])

  React.useEffect(() => {
    setOpen(storage?.drawer as unknown as boolean)
  }, [storage?.drawer])

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

  React.useEffect(() => {
    setOpen(isDrawerHover)
  }, [isDrawerHover])

  const toggleDrawer = () => {
    setOpen(!open)
    localStorage.setItem('finDash', JSON.stringify({ drawer: !open }))
  }

  // console.log(window.localStorage.getItem('finDash'))

  const [anchorElProfile, setAnchorElProfile] = React.useState(null)
  const [anchorElWidgets, setAnchorElWidgets] = React.useState(null)

  const handleChange = (event: any) => {
    /* setAuth(event.target.checked) */
  }

  function HideOnScroll(props: ScrollProps) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    })

    return (
      <Slide
        appear={true}
        direction="down"
        in={!!trigger}
        // addEndListener={(e) => console.log(e)}
      >
        <Box position={'fixed'} zIndex={1}>
          {children}
        </Box>
      </Slide>
    )
  }

  const handleMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget as any)
  }

  const handleMenuWidget = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElWidgets(event.currentTarget as any)
  }

  const handleClose = () => {
    setAnchorElProfile(null)
    setAnchorElWidgets(null)
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
    signOut({ callbackUrl: '/' })
  }
  // console.log({ trigger })
  // console.log({ props })

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  // console.log(trigger)

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
        open={open}
        position="absolute"
        elevation={0}
        // elevation={!!trigger ? 4 : 0}
        // enableColorOnDark
        // color="primary"
      >
        {/* <Slide appear={false} direction="down" in={!trigger}> */}
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
                ml: 0,
              }}
            >
              <IconHome />
            </IconButton>
            {breadcrumb &&
              breadcrumb.map((item, i) => {
                const sum = breadcrumb.length + 1
                return (
                  <Box key={`bread-${i + 1}`} sx={{ display: 'flex' }}>
                    {i < sum ? (
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={style.dividerArrow}
                      />
                    ) : (
                      ''
                    )}
                    <Typography
                      component="a"
                      href={item.url}
                      variant="subtitle1"
                      color="inherit"
                      noWrap
                      sx={{ textDecoration: 'none' }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                )
              })}
          </Box>
          <Stack spacing={{ md: 0 }} direction="row">
            <ClickAwayListener onClickAway={() => setSearchOpen(false)}>
              <Box
                display={'flex'}
                alignItems={'center'}
                sx={searchOpen ? style.openFormBox : null}
              >
                <IconButton
                  color="inherit"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <IconSearch fontSize="medium" />
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
            <FloatMessages show={openNotify} items={itemsNotify} />
            <IconButton
              color="inherit"
              aria-label="widget shortcut"
              aria-controls="menu-appbar-widget"
              aria-haspopup="true"
              onClick={handleMenuWidget}
            >
              <IconApps />
            </IconButton>
            {user ? (
              <Box
                onClick={handleMenuProfile}
                component="a"
                sx={{ cursor: 'pointer' }}
              >
                <Stack direction="row">
                  <IconButton
                    color="inherit"
                    aria-label="profile of current user"
                    aria-controls="menu-appbar-profile"
                    aria-haspopup="true"
                  >
                    {user?.image ? <Avatar src={user?.image} /> : ''}
                    {/* <img src={user?.image || ''} /> */}
                  </IconButton>
                </Stack>
              </Box>
            ) : (
              ''
            )}
          </Stack>
          <Popover
            id="menu-appbar-widget"
            className="appbar-widget"
            sx={style.menuHasPopup}
            // elevation={4}
            keepMounted
            anchorEl={anchorElWidgets}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={Boolean(anchorElWidgets)}
            onClose={handleClose}
          >
            {Object.values(routeSecondary).map((item: any) => {
              const icon = () => item.icon
              return (
                <MenuItem
                  key={item.url}
                  dense
                  component="div"
                  onClick={handleClose}
                >
                  <Link href={item.url}>
                    {icon()}
                    <Typography
                      component="span"
                      color="secondary.main"
                      variant="caption"
                      noWrap
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </MenuItem>
              )
            })}
          </Popover>
          <Popover
            id="menu-appbar-profile"
            sx={style.menuHasPopup}
            // elevation={4}
            keepMounted
            anchorEl={anchorElProfile}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={Boolean(anchorElProfile)}
            onClose={handleClose}
          >
            <MenuItem dense component="div">
              <Stack direction="column" justifyContent={'center'} m={0.5}>
                <Typography variant="caption">{user?.name}</Typography>
                <Typography
                  variant="caption"
                  sx={{ textTransform: 'lowercase' }}
                >
                  {user?.email}
                </Typography>
              </Stack>
            </MenuItem>
            <MenuItem dense component="div">
              <Link href="/profile">
                <IconUserCircle size={20} strokeWidth={1.5} /> Profile
              </Link>
            </MenuItem>
            <MenuItem dense component="div">
              <Link href="/setting">
                <IconSettingsCog size={20} strokeWidth={1.5} /> Settings
              </Link>
            </MenuItem>
            <MenuItem dense component="div">
              <Link onClick={handleLogout}>
                <IconLogout size={20} strokeWidth={1.5} /> Logout
              </Link>
            </MenuItem>
          </Popover>
        </Toolbar>
        {/* </HideOnScroll> */}
        {/* </Slide> */}
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          ...style.drawer,
          ...(!open && { ...style.drawerPaper }),
        }}
      >
        <Box
        // onMouseOver={() => {
        //   setIsDrawerHover(true)
        // }}
        // onMouseOut={() => {
        //   if (!storage?.drawer) {
        //     setIsDrawerHover(false)
        //   }
        // }}
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
              <IconChevronLeft stroke={1} />
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
        </Box>
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
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            // height: '100%',
            minHeight: '100vh',
            mt: 2,
            mb: 4,
            pt: 6,
          }}
        >
          <AlertSnackBar
            hidden={false}
            // title="Test Title"
            // message="Test Message"
          />
          <FloatConfig />
          <HideOnScroll>
            <>
              <b>Scroll</b>
            </>
          </HideOnScroll>
          {children}
          <Copyright />
          <ScrollToTop />
          <ToggleColor />
        </Container>
      </Box>
    </Box>
  )
}

export default function DashboardLayout(
  props: PropsWithChildren<CrumbProps & ScrollProps & CommonProps>
) {
  const { children, ...rest } = props
  return <DashboardContent {...rest}>{children}</DashboardContent>
}
