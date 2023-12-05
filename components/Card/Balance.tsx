import * as React from 'react'

/* Icons */
import {
  IconWalletOff,
  IconFileInvoice,
  IconTransferOut,
  IconDotsVertical,
  IconScale,
} from '@tabler/icons-react'

import {
  Grid,
  Stack,
  Typography,
  IconButton,
  MenuItem,
  Link,
  Popover,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

/* 
function BalanceCard (props: any) {
  const { post } = props;
}
*/

function BalanceCard() {
  const theme = useTheme()

  const balanceData = [
    {
      id: 1,
      name: 'Primary Account',
      accNumber: '9129 **** **** 3429',
      fund: 1200000,
      variant: 'warning',
    },
    {
      id: 2,
      name: 'Success Account',
      accNumber: '9034 **** **** 1900',
      fund: 300000,
      variant: 'success',
    },
    {
      id: 3,
      name: 'Info Account',
      accNumber: '2414 **** **** 4292',
      fund: 210000,
      variant: 'info',
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState<HTMLInputElement | ''>()

  const handleTraxMenu = (evt: React.FormEvent<EventTarget>) => {
    setAnchorEl(evt.currentTarget as HTMLInputElement)
  }

  const handleClose = () => {
    setAnchorEl('')
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Stack
          justifyContent="space-between"
          alignItems="stretch"
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={{
            xs: 1,
            sm: 2,
            md: 1,
          }}
        >
          {balanceData &&
            balanceData.map((item: any) => {
              const isDark = theme.palette.mode === 'dark'
              return (
                <Grid
                  key={item.id}
                  container
                  alignItems="top"
                  boxShadow={0}
                  sx={{
                    border: isDark
                      ? '2px solid secondary.light'
                      : '2px solid #f2f2f2',
                    p: 2,
                    borderRadius: '12px',
                    color: isDark ? 'grey.100' : 'white',
                    transition: '.5s ease',
                    boxShadow: isDark
                      ? '0 2px 6px 0 rgb(10 10 50 / 65%), 0 2px 6px 0 rgb(0 0 0 / 54%)'
                      : '0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)',
                    backgroundColor: isDark
                      ? 'primary.dark'
                      : `${item.variant}.main`,
                    backgroundImage: 'var(--gradient-info)',
                    ':hover': {
                      boxShadow: isDark
                        ? '0 2px 12px 0 rgb(0 0 0 / 75%), 0 2px 12px 0 rgb(0 0 0 / 94%)'
                        : '0 2px 12px 0 rgb(218 218 253 / 75%), 0 2px 12px 0 rgb(206 206 238 / 64%)',
                    },
                  }}
                >
                  <Grid item sm={12} md={9}>
                    <Typography variant="h6" component="h4">
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item sm={12} md={3} textAlign="right">
                    <IconScale size={46} stroke={1.25} />
                  </Grid>
                  <Grid item sm={12} md={12}>
                    <Typography variant="h5" component="h5">
                      $ {item.fund}
                    </Typography>
                    <Grid
                      container
                      sx={{
                        '.mui-style-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper':
                          {
                            boxShadow: '0 !important;',
                          },
                      }}
                    >
                      <Grid item lg={10}>
                        <Typography>{item.accNumber}</Typography>
                      </Grid>
                      <Grid item lg={2} textAlign="right">
                        <IconButton
                          id={`menu-trax${item.id}`}
                          size="small"
                          aria-label="user transaction actions"
                          aria-controls={`popmenu-${item.id}`}
                          aria-haspopup="true"
                          onClick={handleTraxMenu}
                          aria-expanded={anchorEl ? 'true' : undefined}
                        >
                          <IconDotsVertical size={18} color="white" />
                        </IconButton>
                        <Popover
                          keepMounted
                          id={`popmenu-${item.id}`}
                          anchorEl={anchorEl as HTMLElement}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          elevation={1}
                        >
                          <MenuItem dense component="div">
                            <Link
                              href="#transfer"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <IconTransferOut
                                size={18}
                                style={{
                                  verticalAlign: 'middle',
                                  marginRight: '0.5rem',
                                }}
                              />
                              Transfer
                            </Link>
                          </MenuItem>
                          <MenuItem dense component="div">
                            <Link
                              href="#statement"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <IconFileInvoice
                                size={18}
                                style={{
                                  verticalAlign: 'middle',
                                  marginRight: '0.5rem',
                                }}
                              />
                              Statement
                            </Link>
                          </MenuItem>
                          <MenuItem dense component="div">
                            <Link
                              href="#statement"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <IconWalletOff
                                size={18}
                                style={{
                                  verticalAlign: 'middle',
                                  marginRight: '0.5rem',
                                }}
                              />
                              Freeze Account
                            </Link>
                          </MenuItem>
                        </Popover>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default BalanceCard
