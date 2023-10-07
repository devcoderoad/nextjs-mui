import * as React from 'react'
// import { Router } from 'next/router'
import { useRouter } from 'next/router'
import AssignmentIcon from '@mui/icons-material/Assignment'
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

import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  List,
  Collapse,
} from '@mui/material'

/* routes */
import { routeDashboard, routeSecondary } from '@config/routes'

export const mainListItems = (compact = true) => {
  const router = useRouter()
  return (
    <React.Fragment>
      <ListSubheader component="div" hidden={!compact} color="primary">
        Pages
      </ListSubheader>
      {Object.values(routeDashboard).map((route) => {
        return (
          <ListItemButton
            dense
            key={route.to}
            href={route.href}
            selected={route.href === router.asPath}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItemButton>
        )
      })}
    </React.Fragment>
  )
}

export const secondaryListItems = (compact = false) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!compact) {
      setOpen(false)
    }
  }, [compact])

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <ListSubheader component="div" hidden={!compact} color="primary">
        Ui Elements
      </ListSubheader>
      <ListItemButton dense onClick={handleClick}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary={'Other Pages'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {Object.values(routeSecondary).map((route) => {
            return (
              <ListItemButton
                dense
                key={route.to}
                href={route.href}
                selected={route.href === router.asPath}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
      <ListItemButton dense>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton dense>
        <ListItemIcon>
          <SummarizeIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  )
}

export const thirdListItems = (compact = false) => (
  <React.Fragment>
    <ListSubheader component="div" hidden={!compact} color="primary">
      Widgets
    </ListSubheader>
    <ListItemButton dense>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton dense>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
  </React.Fragment>
)
