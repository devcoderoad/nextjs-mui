import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from '@mui/material'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'
/* Components */
import CardMedias from '@components/Card/Medias'

function PageContent() {
  const post = {
    title: 'lorem ipsum dolor sit amet',
    description: 'lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=720&q=80',
    imageLabel: 'lorem ipsum dolor sit amet',
    date: '20 June 2023',
  }
  return (
    <Box my={2}>
      <Typography variant="h6" mb={1}>
        Reports
      </Typography>
      <Box component="section">
        <Grid container mb={4} spacing={2}>
          {[0, 1, 2, 3].map((_, i) => (
            <Grid key={i++} item sm={12} md={6} lg={3}>
              <CardMedias />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box component="section">
        <Grid container spacing={4}>
          {[0, 1, 2, 3].map((_, i) => (
            <Grid key={i++} item xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h3" variant="h6">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle2" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={post.image}
                    alt={post.imageLabel}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box component="section" mt={6}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                background: `url(${post.image}) top center no-repeat`,
                backgroundSize: 'cover',
                position: 'relative',
                display: 'block',
                // overflow: "hidden",
                zIndex: 0,
                color: 'white',
                ':before': {
                  content: '" "',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  zIndex: -1,
                  width: '100%',
                  heigth: '100%',
                  top: 0,
                  bottom: 0,
                  background:
                    'linear-gradient(180deg,rgba(2,0,36,0) 63%,rgba(0,0,0,.7));',
                },
              }}
            >
              <Typography component="h5" variant="h6">
                Image of the cards
              </Typography>
              <Box component="p">{post.description}</Box>
              <Box component="p" color="white">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition.{' '}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default function Page() {
  const post = {
    title: 'lorem ipsum dolor sit amet',
    description: 'lorem ipsum dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=720&q=80',
    imageLabel: 'lorem ipsum dolor sit amet',
    date: '20 June 2023',
  }
  return (
    <DashboardLayout>
      <PageContent />
    </DashboardLayout>
  )
}
