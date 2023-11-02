import React from 'react'
import { Grid, Avatar, Typography, Badge, styled, Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
export interface OwnProps {
  id: number
  author: string
  title: string
  text: string
  timeStamp: string
}

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

export default function MessageUser({
  items = [
    {
      id: 1,
      author: 'Mr. Dimsum',
      title: 'Completely synergize resource taxing relationships',
      text: 'Interactively coordinate proactive e-commerce via process-centric thinking. Completely pursue scalable customer service through sustainable potentialities. Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or sources.',
      timeStamp: '21 Second Ago',
    },
    {
      id: 2,
      author: 'Ms Diane Flock',
      title:
        'Objectively innovate empowered manufactured products whereas parallel',
      text: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.',
      timeStamp: '4 Hour Ago',
    },
    {
      id: 3,
      author: 'Lamelo Ball',
      title:
        'Proactively envisioned multimedia based expertise and cross-media growth strategies',
      text: 'Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.',
      timeStamp: '1 Day Ago',
    },
    {
      id: 4,
      author: 'Andre Vicks',
      title:
        'Phosfluorescently engage worldwide methodologies with web-enabled technology',
      text: 'Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
      timeStamp: '3 Days Ago',
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
            </Grid>
            <Grid item xs container wrap="wrap">
              <Typography
                sx={{ fontWeight: '600' }}
                variant="caption"
                component={'p'}
              >
                {item.author}
              </Typography>
              <Box sx={{ width: '100%', lineHeight: 0.5, mb: 0.5 }}>
                <Typography variant="caption" color="secondary.main">
                  <AccessTimeIcon
                    sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }}
                  />
                  {item.timeStamp}
                </Typography>
              </Box>
              <Typography
                sx={{ lineHeight: 1.25, fontWeight: '300', mb: 0.5 }}
                variant="body1"
                color="secondary.dark"
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ mt: 0.5 }}
                variant="body2"
                color="secondary.main"
              >
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
    </>
  )
}
