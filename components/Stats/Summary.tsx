import {
  Paper,
  Box,
  Stack,
  Typography,
  Grid,
  LinearProgress,
  LinearProgressPropsColorOverrides,
  IconButton,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'

/* Icons */
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react'
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
  icon?: React.ReactElement
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
  size?: 'sm' | 'md' | 'lg' | 'xl' | string
}

function Component({
  title = 'Revenue',
  total = 999,
  type = 'success',
  items = [
    {
      name: 'increase compared to last month',
      value: 50,
      type: 'success',
    },
  ],
  size = 'sm',
  icon = <IconArrowUpRight color="#929292" size={38} stroke={1} />,
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
      // backgroundColor: 'transparent',
      // ':before': {
      //   top: '-2.5rem',
      //   right: '-1.5rem',
      //   content: '" "',
      //   position: 'absolute',
      //   transform: 'rotate(30deg)',
      //   width: 0,
      //   height: 0,
      //   opacity: 0.15,
      //   zIndex: -1,
      //   borderTop: '45px solid transparent',
      //   borderRight: '100px solid #cdcdcd',
      //   borderBottom: '45px solid transparent',
      // },
      // ':after': {
      //   zIndex: -1,
      //   content: '" "',
      //   backgroundImage:
      //     'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1220 320%27%3E%3Cpath fill=%27%233c988f%27 fill-opacity=%270.125%27 d=%27M0,64L120,101.3C240,139,480,213,720,250.7C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z%27%3E%3C/path%3E%3C/svg%3E");',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundPosition: '50% 100%',
      //   position: 'absolute',
      //   width: '100%',
      //   height: '100%',
      //   right: 0,
      //   bottom: 0,
      // },
    }
  }, [])

  return (
    <Box maxWidth={size} {...rest}>
      <Paper sx={statStyle}>
        <Stack
          direction={'row'}
          justifyContent={'start'}
          spacing={2}
          gap={0}
          alignItems={'center'}
        >
          <Stack>
            <Typography
              variant="subtitle2"
              textTransform={'uppercase'}
              fontWeight={600}
              color={`${type}.main`}
            >
              {title}
            </Typography>
            <Typography variant="h5" color={`${type}.main`}>
              ${kFormatter(total)}
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundColor: `var(--alpha-bg-${type})`,
              borderRadius: 2,
            }}
          >
            {icon}
          </Stack>
        </Stack>
        <Grid
          container
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {items.length > 0
            ? items.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <Grid item xl={12} textAlign={'left'}>
                      <Stack direction={'row'} gap={1} alignItems={'baseline'}>
                        <Typography
                          variant="subtitle2"
                          color={`${type}.main`}
                          fontWeight={600}
                        >
                          {item?.value}%
                        </Typography>
                        <Typography variant="caption" color={'secondary'}>
                          {item?.name}
                        </Typography>
                      </Stack>
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
