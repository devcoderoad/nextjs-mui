import React from 'react'
import {
  Grid,
  Typography,
  Badge,
  styled,
  Box,
  Icon,
  IconProps,
} from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'

/* Icons */
// import BusinessIcon from '@mui/icons-material/Business'
// import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate'
// import NotificationsIcon from '@mui/icons-material/Notifications'
// import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
// import ApprovalIcon from '@mui/icons-material/Approval'
// import BookOnlineIcon from '@mui/icons-material/BookOnline'

import { IconHomeStats } from '@tabler/icons-react'
import { IconHomeShield } from '@tabler/icons-react'
import { IconBellRinging } from '@tabler/icons-react'
import { IconScan } from '@tabler/icons-react'
import { IconEyeCheck } from '@tabler/icons-react'
import { IconBookUpload } from '@tabler/icons-react'

export interface OwnProps {
  id: number
  type?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  text: string
  category?:
    | 'business'
    | 'system'
    | 'notification'
    | 'document'
    | 'approval'
    | 'journal'
  timeStamp: string
}

export type OwnBadgeProps = {
  backgroundColor: string
  color: string
}

export default function MessageSystem({
  items = [
    {
      id: 1,
      type: 'info',
      text: 'Bulk sales submission published',
      timeStamp: '21 Second Ago',
      category: 'approval',
    },
    {
      id: 2,
      type: 'success',
      text: 'Sales submission published',
      timeStamp: '4 Hour Ago',
      category: 'approval',
    },
    {
      id: 3,
      type: 'warning',
      text: 'File cloud over capacity',
      timeStamp: '1 Day Ago',
      category: 'document',
    },
    {
      id: 4,
      type: 'success',
      text: 'Completely synergize scalable',
      timeStamp: '3 Days Ago',
      category: 'journal',
    },
    {
      id: 5,
      type: 'default',
      text: 'Finished application update',
      timeStamp: '21 Second Ago',
      category: 'system',
    },
    {
      id: 6,
      type: 'primary',
      text: 'Sarah make an submission on sales',
      timeStamp: '21 Second Ago',
      category: 'business',
    },
    {
      id: 7,
      type: 'warning',
      text: 'Schedule for internal meeting',
      timeStamp: '1 Day Ago',
      category: 'notification',
    },
  ],
}: {
  items?: OwnProps[]
}): React.ReactElement {
  const IconMap = (category: string, type: string) => {
    const css = {
      verticalAlign: 'middle',
      color: type,
      strokeWidth: 1.25,
    }
    const item: any = {
      business: <IconHomeStats style={css} />,
      system: <IconHomeShield style={css} />,
      notification: <IconBellRinging style={css} />,
      document: <IconScan style={css} />,
      approval: <IconEyeCheck style={css} />,
      journal: <IconBookUpload style={css} />,
    }
    return item[category]
  }

  return (
    <Box
      sx={{
        '.rootMessage:nth-of-type(odd)': {
          backgroundColor: '#F3F3F3',
          borderBottom: '1px solid #F3F3F3',
        },
        '.rootMessage': {
          '&:hover': { backgroundColor: '#F6F6F6' },
        },
      }}
    >
      {items &&
        items.length &&
        items.map((item: any) => (
          <Grid key={item.id} container p={1} className="rootMessage">
            <Grid item component="div" pr={1}>
              <Icon
                color={item.type}
                sx={{
                  // backgroundImage: 'linear-gradient(24deg, #000 0%, #fff 10%)',
                  backgroundColor: 'rgba(255,255,255, .35)',
                  // backgroundImage:
                  //   'linear-gradient(52deg,#1c7ed6 3%, #22b8cf 97%)',
                  borderRadius: '50px',
                  borderWidth: '1px',
                  borderColor: `${item.type}.dark`,
                  borderStyle: 'solid',
                  overflow: 'visible',
                  zIndex: 0,
                  height: '40px',
                  width: '40px',
                }}
              >
                {IconMap(item.category, item.type)}
              </Icon>
            </Grid>
            <Grid item xs container wrap="wrap" pr={4}>
              <Grid container justifyContent={'space-between'}>
                <Grid item>
                  <Box sx={{ width: '100%', lineHeight: 0.5, mb: 0 }}>
                    <Typography variant="caption" color="secondary.main">
                      <AccessTimeIcon
                        sx={{
                          fontSize: 14,
                          verticalAlign: 'middle',
                          mr: 0.5,
                        }}
                      />
                      {item.timeStamp}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="caption" color="secondary.dark">
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
    </Box>
  )
}