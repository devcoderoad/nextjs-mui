import { Toolbar, Typography, IconButton } from '@mui/material'
import CommentIcon from '@mui/icons-material/CommentBankOutlined'

interface OwnProps {
  title?: string
  type?: string
  children?: React.ReactElement
}

export default function Component(props: OwnProps) {
  const {
    title = 'Hi, Administrator',
    type = 'secondary.main',
    children = null,
  } = props

  return (
    <Toolbar>
      <Typography component="h6" variant="subtitle2" color={`${type}.main`}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label={title}
          size="small"
        >
          <CommentIcon htmlColor={type} />
        </IconButton>
        {title}
      </Typography>
      {children}
    </Toolbar>
  )
}
