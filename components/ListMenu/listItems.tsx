import * as React from 'react'
import { useRouter } from 'next/router'

/* Tabler icons */
import {
  IconAppWindow,
  IconFolderQuestion,
  IconShoppingCart,
  IconWallet,
  IconTags,
  IconChevronDown,
  IconChevronUp,
  IconFlagQuestion,
} from '@tabler/icons-react'

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
          <IconAppWindow />
        </ListItemIcon>
        <ListItemText primary={'Pages'} />
        {open ? <IconChevronUp stroke={1} /> : <IconChevronDown stroke={1} />}
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
      <ListItemButton
        dense
        href={'/badges'}
        selected={'/badges' === router.asPath}
      >
        <ListItemIcon>
          <IconTags />
        </ListItemIcon>
        <ListItemText primary="Bagdes" />
      </ListItemButton>
      <ListItemButton
        dense
        href={'/sales'}
        selected={'/sales' === router.asPath}
      >
        <ListItemIcon>
          <IconWallet />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItemButton>
    </React.Fragment>
  )
}

export const thirdListItems = (compact = false) => {
  const router = useRouter()
  return (
    <React.Fragment>
      <ListSubheader component="div" hidden={!compact} color="primary">
        Widgets
      </ListSubheader>
      <ListItemButton dense href={'/faqs'} selected={'/faqs' === router.asPath}>
        <ListItemIcon>
          <IconFolderQuestion />
        </ListItemIcon>
        <ListItemText primary="FAQs" />
      </ListItemButton>
      <ListItemButton
        dense
        href={'/commerce'}
        selected={'/commerce' === router.asPath}
      >
        <ListItemIcon>
          <IconShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Commerce" />
      </ListItemButton>
      <ListItemButton
        dense
        href={'/documentation'}
        selected={'/docs' === router.asPath}
      >
        <ListItemIcon>
          <IconFlagQuestion />
        </ListItemIcon>
        <ListItemText primary="Documentation" />
      </ListItemButton>
    </React.Fragment>
  )
}
