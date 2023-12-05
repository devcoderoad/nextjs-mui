import { useMemo } from 'react'
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'

export default function MediasCard() {
  const cssCard = useMemo(
    () => ({
      background:
        'url(https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80) top center no-repeat',
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
      sx={{
        maxWidth: 585,
        border: 1,
        borderColor: '#bebebe',
        borderRadius: '10px',
        position: 'relative',
        ':hover': {
          boxShadow: 'var(--drop-shadow)',
        },
      }}
      elevation={0}
      component={'article'}
    >
      <CardMedia component="div" sx={cssCard}>
        <Box
          component="div"
          sx={{ position: 'relative', bottom: '.75rem', zIndex: 1 }}
        >
          <Box sx={{ position: 'absolute', top: 0 }}>
            <Typography
              variant="h6"
              fontWeight={'500'}
              fontSize={13}
              mt={1}
              mb={2}
              color={'secondary'}
              textTransform={'uppercase'}
            >
              Lizard
            </Typography>
            <Typography variant="h5" fontWeight={'600'} lineHeight={1.3}>
              Ranging across all continents except Antarctica
            </Typography>
          </Box>
        </Box>
      </CardMedia>
      <CardContent sx={{ position: 'absolute', bottom: 0, zIndex: 1 }}>
        <Typography variant="subtitle2" color="secondary.light" mb={2}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species
        </Typography>
        <Button size="small" variant="contained" color="secondary">
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
