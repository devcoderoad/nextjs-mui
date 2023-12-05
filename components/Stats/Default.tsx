import {
  Paper,
  Box,
  Stack,
  Typography,
  Grid,
  LinearProgress,
  LinearProgressPropsColorOverrides,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

/* Icons */
import { IconUsers } from '@tabler/icons-react'
import React, { useMemo } from 'react'

type TItems = {
  name: string
  value: number
  type: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    LinearProgressPropsColorOverrides
  >
}

interface OwnProps {
  title?: string | undefined
  total?: number | undefined
  type?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    LinearProgressPropsColorOverrides
  >
  items?: TItems[]
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function Component({
  title = 'Total Visitors',
  total = 100,
  type = 'info',
  items = [
    {
      name: 'Indonesia',
      value: 50,
      type: 'warning',
    },
  ],
  size = 'sm',
  ...rest
}: OwnProps) {
  const kFormatter = (num: number) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'k'
      : Math.sign(num) * Math.abs(num)
  }

  const statStyle = useMemo(() => {
    return {
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      margin: 'auto',
      zIndex: 0,
      ':before': {
        top: '-0.5rem',
        right: '-1.5rem',
        content: '" "',
        position: 'absolute',
        transform: 'rotate(30deg)',
        width: 0,
        height: 0,
        opacity: 0.15,
        zIndex: -1,
        borderTop: '45px solid transparent',
        borderRight: '100px solid #cdcdcd',
        borderBottom: '45px solid transparent',
      },
    }
  }, [])

  return (
    <Box maxWidth={size} {...rest}>
      <Paper sx={statStyle}>
        <Box>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="body2" color={'secondary'}>
              {title}
            </Typography>
            <IconUsers color="#929292" size={18} />
          </Stack>
          <Typography variant="h5" color={`${type}.main`}>
            {kFormatter(total)}
          </Typography>
        </Box>
        <Grid
          container
          spacing={[0, 1]}
          gap={0}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {items.length > 0
            ? items.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <Grid item xl={2} textAlign={'right'} overflow={'hidden'}>
                      <Typography variant="caption" color={'secondary'}>
                        {item?.name}
                      </Typography>
                    </Grid>
                    <Grid item xl={9}>
                      <LinearProgress
                        sx={{ height: 5, verticalAlign: 'middle' }}
                        variant="determinate"
                        value={item?.value}
                        color={item?.type}
                      />
                    </Grid>
                    <Grid item xl={1} textAlign={'right'}>
                      <Typography variant="caption" color={'secondary'}>
                        {item?.value}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                )
              })
            : ''}
        </Grid>
      </Paper>
    </Box>
  )
}

export default Component
