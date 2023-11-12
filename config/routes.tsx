/* Dashboard Icons */
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import AppRegistration from '@mui/icons-material/AppRegistration'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import LayersIcon from '@mui/icons-material/Layers'
import CardsIcon from '@mui/icons-material/CardMembership'
import AccountIcon from '@mui/icons-material/AccountCircle'
import BadgeIcon from '@mui/icons-material/Badge'

/* Tabler-icons  */
import { IconFile, IconLayoutDashboard } from '@tabler/icons-react'
import { IconChartBar } from '@tabler/icons-react'
import { IconShoppingCart } from '@tabler/icons-react'
import { IconUsers } from '@tabler/icons-react'
import { IconCards } from '@tabler/icons-react'
import { IconForms } from '@tabler/icons-react'
import { IconEPassport } from '@tabler/icons-react'
import { IconBoxMultiple } from '@tabler/icons-react'
import { IconUserCircle } from '@tabler/icons-react'
import { IconPhoto } from '@tabler/icons-react'
import { IconTools } from '@tabler/icons-react'
import { IconLayoutBottombarCollapse } from '@tabler/icons-react'
import { IconUserScan } from '@tabler/icons-react'
import { IconShoppingBagCheck } from '@tabler/icons-react'
import { IconAlbum } from '@tabler/icons-react'

/* Documentation Icons */
import ApiIcon from '@mui/icons-material/Api'
import PersonPinIcon from '@mui/icons-material/PersonPin'

/* Secondary Icons */

import AssessmentIcon from '@mui/icons-material/Assessment'
import SummarizeIcon from '@mui/icons-material/Summarize'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import StarBorder from '@mui/icons-material/StarBorder'
import TabIcon from '@mui/icons-material/TabUnselected'
import PagesIcon from '@mui/icons-material/PagesOutlined'
import UserIcon from '@mui/icons-material/VerifiedUser'
import ShopIcon from '@mui/icons-material/Shop2'
import GalleryIcon from '@mui/icons-material/BrowseGallery'

/* Homepage routes */
const routePage = {
  home: {
    name: 'Home',
    text: 'Homepage',
    href: '/',
    url: '/',
    to: '/',
  },
  dashboard: {
    name: 'Dashboard',
    text: 'Administration Dashboard',
    href: '/dashboard',
    url: '/dashboard',
    to: '/dashboard',
  },
  card: {
    name: 'Cards',
    text: 'Card User Interface',
    href: '/card',
    url: '/card',
    to: '/card',
  },
  pricing: {
    name: 'Pricing',
    text: 'Pricing User Interface',
    href: '/pricing',
    url: '/pricing',
    to: '/pricing',
  },
  signin: {
    name: 'Sign In',
    text: 'User Sign In Interface',
    href: '/auth/signin',
    url: '/auth/signin',
    to: '/auth/signin',
  },
  signup: {
    name: 'Sign Up',
    text: 'User Sign Up Interface',
    href: '/auth/signup',
    url: '/auth/signup',
    to: '/auth/signup',
  },
  signinside: {
    name: 'Sign In Side',
    text: 'User Sign In Side Interface',
    href: '/auth/signinside',
    url: '/auth/signinside',
    to: '/auth/signinside',
  },
  blog: {
    name: 'Blog',
    text: 'Blog Interface',
    href: '/blog',
    url: '/blog',
    to: '/blog',
  },
  about: {
    name: 'About',
    text: 'About Page Interface',
    href: '/about',
    url: '/about',
    to: '/about',
  },
  album: {
    name: 'Albums',
    text: 'Albums Interface',
    href: '/album',
    url: '/album',
    to: '/album',
  },
  gallery: {
    name: 'Gallery',
    text: 'Gallery Interface',
    href: '/gallery',
    url: '/gallery',
    to: '/gallery',
  },
  chart: {
    name: 'Chart',
    text: 'Charts Interface',
    href: '/chart',
    url: '/chart',
    to: '/chart',
  },
  checkout: {
    name: 'Checkout',
    text: 'Checkout Interface',
    href: '/checkout',
    url: '/checkout',
    to: '/checkout',
  },
}

/* Dashboard routes */
const routeDashboard = {
  dashboard: {
    name: 'Dashboard',
    icon: <IconLayoutDashboard />,
    href: '/dashboard',
    url: '/dashboard',
    to: '/dashboard',
  },
  chart: {
    name: 'Charts',
    icon: <IconChartBar />,
    href: '/chart',
    url: '/chart',
    to: '/chart',
  },
  card: {
    name: 'Cards',
    icon: <IconCards />,
    href: '/card',
    url: '/card',
    to: '/card',
  },
  signin: {
    name: 'Users',
    icon: <IconUsers />,
    href: '/users',
    url: '/users',
    to: '/users',
  },
  pricing: {
    name: 'Pricing',
    icon: <IconShoppingCart />,
    href: '/pricing',
    url: '/pricing',
    to: '/pricing',
  },
  forms: {
    name: 'Forms',
    icon: <IconForms />,
    href: '/form/form',
    url: '/form',
    to: '/form',
  },
  reports: {
    name: 'Reports',
    icon: <IconEPassport />,
    href: '/reports',
    url: '/reports',
    to: '/reports',
  },
  blogs: {
    name: 'Blogs',
    icon: <IconBoxMultiple />,
    href: '/blog',
    url: '/blog',
    to: '/blog',
  },
  profile: {
    name: 'Profile',
    icon: <IconUserCircle />,
    href: '/profile',
    url: '/profile',
    to: '/profile',
  },
  album: {
    name: 'Album',
    icon: <IconPhoto />,
    href: '/album',
    url: '/album',
    to: '/album',
  },
}

/* Secondary routes */
const routeSecondary = {
  widgets: {
    name: 'Widgets',
    icon: <IconTools />,
    href: '/widgets',
    url: '/widgets',
    to: '/widgets',
  },
  tabs: {
    name: 'Tabs',
    icon: <IconLayoutBottombarCollapse />,
    href: '/tabs',
    url: '/tabs',
    to: '/tabs',
  },
  filter: {
    name: 'Landing',
    icon: <IconFile />,
    href: '/landing/filter',
    url: '/landing/filter',
    to: '/landing/filter',
  },
  about: {
    name: 'About',
    icon: <IconUserScan />,
    href: '/about',
    url: '/about',
    to: '/about',
  },
  checkout: {
    name: 'Checkout',
    icon: <IconShoppingBagCheck />,
    href: '/checkout',
    url: '/checkout',
    to: '/checkout',
  },
  gallery: {
    name: 'Gallery',
    icon: <IconAlbum />,
    href: '/gallery',
    url: '/gallery',
    to: '/gallery',
  },
}

/* Documentation routes */
const routeDocumentation = {
  about: {
    name: 'About',
    icon: <PersonPinIcon htmlColor="red" sx={{ verticalAlign: 'middle' }} />,
    text: 'Go to the about page',
    href: '/about',
    url: '/about',
    to: '/about',
  },
  documentation: {
    name: 'Documentation',
    icon: <ApiIcon htmlColor="red" sx={{ verticalAlign: 'middle' }} />,
    text: 'Go to the documentation page',
    href: '/documentation',
    url: '/documentation',
    to: '/documentation',
  },
}

export { routePage, routeDashboard, routeSecondary, routeDocumentation }
