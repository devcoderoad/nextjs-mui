import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'

import PhoneMissedIcon from '@mui/icons-material/PhoneMissedOutlined'

/* Types */
type FaqContent = {
  buttonText?: string
  buttonVariant?: string
  description?: string[] | []
  price?: string
  title?: string
}
// export enum FaqTypes {
enum FaqTypes {
  default = 'default',
  compact = 'compact',
  large = 'large',
}
interface OwnProps {
  items?: FaqContent[] | null
  type?: FaqTypes | 'default'
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function Component(props: OwnProps) {
  const { items } = props

  // console.log(FaqTypes.default)
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        '.MuiTabs-root': {
          height: '60px',
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        {items &&
          items.map((item, i) => (
            <Tab
              key={i++}
              wrapped
              icon={<PhoneMissedIcon fontSize="small" />}
              iconPosition="start"
              label={item.title}
            />
          ))}
      </Tabs>
      <Box>
        {items &&
          items.map((item, i) => (
            <TabPanel key={i++} value={value} index={i}>
              <Typography variant="h5">
                {item.title} - ${item.price}
              </Typography>
              {item.description?.map((item: any, j) => (
                <p key={j++}>{item}</p>
              ))}
            </TabPanel>
          ))}
      </Box>
    </Box>
  )
}
