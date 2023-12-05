import {
  Paper,
  Box,
  Stack,
  Typography,
  Grid,
  LinearProgress,
  Badge,
  BadgePropsColorOverrides,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

import { styledPaper } from '@src/styles'

// type TItems = {
//   name: string | 'Indonesia'
//   value: string | '125k'
// }

interface OwnProps {
  title?: string | undefined
  total?: string | undefined
  type?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    BadgePropsColorOverrides
  >
  items?: {
    name: string | 'Indonesia'
    value: string | '125k'
  }
}

function Component({
  title = 'Organic Search Traffic',
  total = '278%',
  type = 'info',
  items = {
    name: 'Indonesia',
    value: '-17%',
  },
}: OwnProps) {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid item md={4} xs={12}>
        <Paper sx={styledPaper}>
          <Typography color="secondary">
            <Badge
              color={type}
              badgeContent=" "
              variant="dot"
              sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
            />
            {title}
          </Typography>
          <Typography
            color={`${type}.main`}
            component={'h2'}
            fontSize={'28px'}
            fontWeight={'900'}
            sx={{ display: 'inline', mr: 0.5 }}
          >
            {total}
          </Typography>
          <small style={{ color: 'red' }}>{items.value}</small>
        </Paper>
      </Grid>
      <Grid item md={4} xs={12}>
        <Paper sx={styledPaper}>
          <Typography color="secondary">
            <Badge
              color="warning"
              badgeContent=" "
              variant="dot"
              sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
            />
            Paid Search Traffic
          </Typography>
          <Typography
            color={'orange'}
            component={'h2'}
            fontSize={'28px'}
            fontWeight={'900'}
            sx={{ display: 'inline', mr: 0.5 }}
          >
            45%
          </Typography>
          <small style={{ color: 'green' }}>+4%</small>
        </Paper>
      </Grid>
      <Grid item md={4} xs={12}>
        <Paper sx={styledPaper}>
          <Typography color="success.main">
            <Badge
              color="success"
              badgeContent=" "
              variant="dot"
              sx={{ ml: 0.5, mr: 1.25, verticalAlign: 'middle' }}
            />
            Backlinks
          </Typography>
          <Typography
            color={'success.main'}
            component={'h2'}
            fontSize={'28px'}
            fontWeight={'900'}
            sx={{ display: 'inline', mr: 0.5 }}
          >
            278%
          </Typography>
          <small style={{ color: '#ff9900' }}>-17%</small>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Component
