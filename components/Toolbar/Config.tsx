import { Paper, Typography, IconButton, Box, Stack } from '@mui/material'

/* MUI Icons */
import CommentIcon from '@mui/icons-material/CommentBankOutlined'

/* Components */
import Cog from '@components/Cog/Default'

interface OwnProps {
  icon?: React.ReactElement
  title?: string | React.ReactElement
  type?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: React.ReactElement
}

export default function Component(props: OwnProps) {
  const {
    icon = null,
    title = 'Hi, Administrator',
    type = 'secondary',
    size = 'sm',
    children = null,
  } = props

  return (
    <Paper>
      <Box p={2} m="auto" maxWidth={'md'}>
        <Stack
          direction={'row'}
          alignContent={'stretch'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography component="h6" variant="subtitle2" color={type}>
            {icon ? (
              <IconButton
                edge="start"
                color="inherit"
                // aria-label={title}
                size="small"
              >
                <CommentIcon htmlColor={type} />
              </IconButton>
            ) : (
              ''
            )}
            {title}
          </Typography>
          <Cog size={size} />
        </Stack>
        <Box>{children}</Box>
      </Box>
    </Paper>
  )
}
