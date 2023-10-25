import { useMemo } from 'react'
import {
  Button,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'

export default function MediasCard() {
  const cssCard = useMemo(
    () => ({
      background:
        'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80) top center no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'block',
      height: '100%',
      minHeight: '320px',
      zIndex: 0,
      color: 'white',
      textShadow: '2px 2px 15px #000000',
      pl: '1rem',
      pt: '1rem',
      ':after': {
        content: '" "',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        background:
          'linear-gradient(180deg,rgba(2,0,36,0) 15%,rgba(0,0,0,.8));',
      },
    }),
    []
  )
  return (
    <Card
      sx={{ maxWidth: 585, border: 1, borderColor: '#bebebe' }}
      elevation={0}
    >
      <CardMedia component="div" sx={cssCard}>
        <Box
          component="div"
          sx={{ position: 'absolute', bottom: '.75rem', zIndex: 1 }}
        >
          <Typography variant="h5">Lizard</Typography>
          <Typography component="span" variant="caption">
            12 Active
          </Typography>
          <Box component="span" mx={1}>
            |
          </Box>
          <Typography component="span" variant="caption">
            15 Pending
          </Typography>
        </Box>
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
