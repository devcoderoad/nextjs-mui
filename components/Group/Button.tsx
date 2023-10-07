import * as React from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
// import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

const options = [
  'Create a merge commit',
  'Squash and merge',
  'Rebase and merge',
]

export default function GroupButton(props: any) {
  const { title, children, icon } = props
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLInputElement>()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`)
  }

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: any) => {
    if (
      anchorRef.current /* &&
      anchorRef.current.contains(event.target instanceof Element) */
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        sx={{ mb: 1.5 }}
        {...props}
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          // <Grow
          //   {...TransitionProps}
          //   style={{
          //     transformOrigin:
          //       placement === 'bottom' ? 'center top' : 'center bottom',
          //   }}
          // >
          <Paper>
            <ClickAwayListener onClickAway={(e) => handleClose(e)}>
              <MenuList id="split-button-menu" autoFocusItem>
                {options.map((option: any, index: number) => (
                  <MenuItem
                    key={option}
                    disabled={index === 2}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
          // </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}
