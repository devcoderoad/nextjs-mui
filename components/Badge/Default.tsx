import { Grid, Paper, Typography, Box, IconButton } from '@mui/material'
import { IconShoppingCart } from '@tabler/icons-react'

function Component() {
  return (
    <Grid container spacing={[1, 2]}>
      <Grid item xl={6}>
        <Paper sx={{ background: 'var(--gradient-primary)' }}>
          <Grid container direction={'row'} spacing={[1, 0]} p={2}>
            <Grid container direction={'column'} sm={8} spacing={[2]}>
              <Grid item>
                <Typography color="white" variant="caption">
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={22}
                  fontWeight={800}
                  lineHeight={1.2}
                  color={'white'}
                >
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="white" variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  debitis incidunt ipsam culpa sint optio quia ab voluptate ut,
                  magni facilis ducimus?
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} textAlign={'center'} mx={'auto'}>
              <Box sx={{ padding: 2 }}>
                <IconButton
                  size="large"
                  sx={{
                    background: 'var(--gradient-warning)',
                    boxShadow: 'var(--drop-shadow-light)',
                  }}
                >
                  <IconShoppingCart stroke={0.5} size={72} color="white" />
                </IconButton>
                <Typography color={'white'} fontWeight={'700'} my={2}>
                  Shop Now
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xl={6}>
        <Paper sx={{ background: 'var(--gradient-warning)' }}>
          <Grid container direction={'row'} spacing={[1, 0]} p={2}>
            <Grid container direction={'column'} sm={8} spacing={[2]}>
              <Grid item>
                <Typography color="white" variant="caption">
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={22}
                  fontWeight={800}
                  lineHeight={1.2}
                  color={'white'}
                >
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="white" variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  debitis incidunt ipsam culpa sint optio quia ab voluptate ut,
                  magni facilis ducimus?
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} textAlign={'center'} mx={'auto'}>
              <Box sx={{ padding: 2 }}>
                <IconButton
                  size="large"
                  sx={{
                    background: 'var(--alpha-bg-primary)',
                    boxShadow: 'var(--drop-shadow-light)',
                  }}
                >
                  <IconShoppingCart stroke={0.5} size={72} color="white" />
                </IconButton>
                <Typography color={'white'} fontWeight={'700'} my={2}>
                  Shop Now
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xl={6}>
        <Paper sx={{ background: 'var(--gradient-success)' }}>
          <Grid container direction={'row'} spacing={[1, 0]} p={2}>
            <Grid container direction={'column'} sm={8} spacing={[2]}>
              <Grid item>
                <Typography color="white" variant="caption">
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={22}
                  fontWeight={800}
                  lineHeight={1.2}
                  color={'white'}
                >
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="white" variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  debitis incidunt ipsam culpa sint optio quia ab voluptate ut,
                  magni facilis ducimus?
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} textAlign={'center'} mx={'auto'}>
              <Box sx={{ padding: 2 }}>
                <IconButton
                  size="large"
                  sx={{
                    background: 'var(--gradient-warning)',
                    boxShadow: 'var(--drop-shadow-light)',
                  }}
                >
                  <IconShoppingCart stroke={0.5} size={72} color="white" />
                </IconButton>
                <Typography color={'white'} fontWeight={'700'} my={2}>
                  Shop Now
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xl={6}>
        <Paper sx={{ background: 'var(--bg-gradient-bluish)' }}>
          <Grid container direction={'row'} spacing={[1, 0]} p={2}>
            <Grid container direction={'column'} sm={8} spacing={[2]}>
              <Grid item>
                <Typography color="white" variant="caption">
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={22}
                  fontWeight={800}
                  lineHeight={1.2}
                  color={'white'}
                >
                  From the experience into world practical
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="white" variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  debitis incidunt ipsam culpa sint optio quia ab voluptate ut,
                  magni facilis ducimus?
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4} textAlign={'center'} mx={'auto'}>
              <Box sx={{ padding: 2 }}>
                <IconButton
                  size="large"
                  sx={{
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--drop-shadow-light)',
                  }}
                >
                  <IconShoppingCart stroke={0.5} size={72} color="white" />
                </IconButton>
                <Typography color={'white'} fontWeight={'700'} my={2}>
                  Shop Now
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Component
