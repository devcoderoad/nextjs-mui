import React from 'react'
import { Grid, Avatar, Typography, Badge, styled, Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
export interface OwnProps {
  id: number
  author: string
  title: string
  text: string
  timeStamp: string
  type?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
}

export type OwnBadgeProps = {
  backgroundColor: string
  color: string
}

const StyledBadge = styled(Badge)(
  ({
    color,
  }: {
    color:
      | 'primary'
      | 'secondary'
      | 'default'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
  }) => {
    const defaultColor = {
      primary: {
        backgroundColor: 'primary.main',
        color: 'primary.main',
      },
      secondary: {
        backgroundColor: 'secondary.main',
        color: 'secondary.main',
      },
      default: {
        backgroundColor: 'default.main',
        color: 'default.main',
      },
      error: {
        backgroundColor: '#ff0000',
        color: '#ff0000',
      },
      info: {
        backgroundColor: '#44b700',
        color: '#44b700',
      },
      success: {
        backgroundColor: '#44b700',
        color: '#44b700',
      },
      warning: {
        backgroundColor: '#ff9900',
        color: '#ff9900',
      },
    }

    const badgeTheme = defaultColor[color]

    return {
      '& .MuiBadge-badge': {
        ...badgeTheme,
        boxShadow: '0 0 0 2px rgba(255,255,255, .75)',
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
    }
  }
)

export default function MessageUser({
  items = [
    {
      id: 1,
      author: 'Mr. Dimsum',
      title: 'Completely synergize resource taxing relationships',
      text: 'Interactively coordinate proactive e-commerce via process-centric thinking.',
      timeStamp: '21 Second Ago',
      type: 'success',
    },
    {
      id: 2,
      author: 'Ms Diane Flock',
      title:
        'Objectively innovate empowered manufactured products whereas parallel',
      text: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.',
      timeStamp: '4 Hour Ago',
      type: 'warning',
    },
    {
      id: 3,
      author: 'Lamelo Ball',
      title:
        'Proactively envisioned multimedia based expertise and cross-media growth strategies',
      text: 'Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.',
      timeStamp: '1 Day Ago',
      type: 'info',
    },
    {
      id: 4,
      author: 'Andre Vicks',
      title:
        'Phosfluorescently engage worldwide methodologies with web-enabled technology',
      text: 'Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
      timeStamp: '3 Days Ago',
      type: 'warning',
    },
    {
      id: 5,
      author: 'Gaston Nick',
      title:
        'Phosfluorescently engage worldwide methodologies with web-enabled technology',
      text: 'Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
      timeStamp: '4 Days Ago',
      type: 'error',
    },
  ],
}: {
  items?: OwnProps[]
}): React.ReactElement {
  return (
    <>
      {items &&
        items.length &&
        items.map((item: any) => (
          <Grid
            key={item.id}
            container
            spacing={0.5}
            m={0}
            p={1}
            // sx={{
            //   '&:hover': { backgroundColor: '#F6F6F6' },
            // }}
          >
            <Grid item component="div" pr={1}>
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
                  color={item.type}
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                />
              </Avatar>
            </Grid>
            <Grid item xs container wrap="wrap" pr={2}>
              <Grid container justifyContent={'space-between'}>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: '600' }}
                    variant="body2"
                    component={'p'}
                  >
                    {item.author}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ width: '100%', lineHeight: 0.5, mb: 0.5 }}>
                    <Typography variant="caption" color="secondary.main">
                      <AccessTimeIcon
                        sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }}
                      />
                      {item.timeStamp}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography
                sx={{ lineHeight: 1.25, fontWeight: '300', mb: 0.5 }}
                variant="body1"
                color="secondary.dark"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="secondary.main">
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
    </>
  )
}
