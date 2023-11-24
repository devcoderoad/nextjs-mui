import {
  Box,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from '@mui/material'

/* Icons */
import StarIcon from '@mui/icons-material/StarBorderOutlined'
import BadgeIcon from '@mui/icons-material/FolderOpenTwoTone'
import PublishIcon from '@mui/icons-material/TimerTwoTone'
import ReadIcon from '@mui/icons-material/ChevronRightTwoTone'

/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'
/* Components */
import CardMedias from '@components/Card/Medias'
import CardBlog from '@components/Card/Blog'
import { IconClock, IconUser } from '@tabler/icons-react'
/* 
Sweet instant irish cultivar that, acerbic coffee robusta in, whipped caramelization half and half to go medium white cultivar. Single origin rich espresso rich mug affogato, single origin, est extra  redeye brewed aged caffeine redeye. Viennese arabica so fair trade café au lait et coffee redeye galão skinny sugar saucer white frappuccino froth grounds coffee. And skinny mazagran body ristretto kopi-luwak robusta in shop et percolator mug spoon decaffeinated. Filter, con panna, half and half blue mountain, dark breve, froth, robust steamed extraction, to go foam chicory caffeine plunger pot.
*/
export default function Page() {
  const post = {
    title: 'Sweet instant irish cultivar that',
    description:
      'Sweet instant irish cultivar that, acerbic coffee robusta in, whipped caramelization half and half to go medium white cultivar. Single origin rich espresso rich mug affogato, single origin, est extra  redeye brewed aged caffeine redeye.',
    image:
      'https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=720&q=80',
    author: 'Jack Bachmall',
    createdAt: '11 January, 2023',
    category: 'Coffee Latte',
    date: '11 January, 2023',
    imageLabel: 'Image Label',
  }
  const featuredNews = [
    {
      title:
        'Filter robusta chicory irish caramelization fair trade redeye extra',
      date: 'Nov 12, 2022',
      description:
        'Decaffeinated organic aromatic extra  latte black galão caffeine, caramelization iced turkish sugar affogato, mazagran dark, kopi-luwak spoon affogato cup beans.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      like: 275,
      view: '66.3k',
    },
    {
      title: 'Black as grinder grounds doppio, flavour robust, id variety',
      date: 'Nov 11, 2022',
      description:
        'Filter robusta chicory irish caramelization fair trade redeye extra chicory, crema crema redeye, cultivar decaffeinated caramelization that spoon.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      like: 275,
      view: '66.3k',
    },
    {
      title: 'Americano, in organic dark, a variety sweet',
      date: 'Nov 11, 2022',
      description:
        'Cup turkish, and flavour in froth et, sweet, fair trade whipped kopi-luwak shop, dark rich barista java a, doppio aroma dark irish latte.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      like: 275,
      view: '66.3k',
    },
    {
      title:
        'Turkish, a milk as flavour crema, americano ut acerbic, brewed aroma java cinnamon frappuccino arabica',
      date: 'Nov 11, 2022',
      description:
        'Shop medium, whipped roast, cappuccino, affogato milk skinny aged, pumpkin spice black cup rich, at, iced cortado kopi-luwak breve filter.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      like: 275,
      view: '66.3k',
    },
  ]
  return (
    <DashboardLayout breadcrumb={[{ name: 'Cards', url: '/card' }]}>
      <Typography variant="h5" mb={2} mt={2}>
        Cards
      </Typography>
      <Box component="section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                background: `url(${post.image}) top center no-repeat`,
                backgroundSize: 'cover',
                position: 'relative',
                display: 'block',
                height: '100%',
                minHeight: '320px',
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
                    'linear-gradient(180deg,rgba(2,0,36,0) 25%,rgba(0,0,0,.8));',
                },
              }}
            >
              <Box sx={{ position: 'absolute', bottom: '0' }}>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    position: 'relative',
                    ':before': {
                      content: '" "',
                      height: '2px',
                      width: '5%',
                      backgroundColor: '#ffffff',
                      position: 'absolute',
                      bottom: '-0.25rem',
                    },
                  }}
                >
                  Image of the cards
                </Typography>
                <Box
                  component="p"
                  fontSize="small"
                  sx={{
                    textTransform: 'capitalize',
                  }}
                >
                  <BadgeIcon
                    fontSize="small"
                    sx={{
                      verticalAlign: 'middle',
                      mr: 0.5,
                    }}
                  />
                  {post.category}
                  <PublishIcon
                    fontSize="small"
                    sx={{
                      verticalAlign: 'middle',
                      mx: 0.5,
                    }}
                  />
                  {post.createdAt}
                </Box>
                <Box color="white" pb={2}>
                  <Typography variant="body2" mb={2}>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ReadIcon />}
                    color="secondary"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {[0, 1].map((_, i) => (
                <Grid key={i++} item xs={12} md={6}>
                  <Paper
                    sx={{
                      p: 2,
                      background: `url(${post.image}) top center no-repeat`,
                      backgroundSize: 'cover',
                      position: 'relative',
                      display: 'block',
                      height: '100%',
                      minHeight: '320px',
                      zIndex: 0,
                      color: 'white',
                      textShadow: '2px 2px 15px #000000',
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
                          'linear-gradient(180deg,rgba(2,0,36,0) 15%,rgba(0,0,0,.8));',
                      },
                    }}
                  >
                    <Box>
                      <Button
                        variant="contained"
                        disableElevation
                        color="primary"
                        startIcon={<StarIcon />}
                      >
                        1.2
                      </Button>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: '1rem' }}>
                      <Typography component="h4" variant="h5">
                        Image of the cards
                      </Typography>
                      <Box component="span">{post.description}</Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box component="section" my={6}>
        <Grid container mb={4} spacing={2}>
          {[0, 1, 2, 3].map((_, i) => (
            <Grid item key={i++} sm={12} md={6} lg={3}>
              <CardMedias />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box component="section">
        <Typography variant="h5" mb={2}>
          Blog Card
        </Typography>
        <CardBlog />
      </Box>
      <Box component="section">
        <Typography variant="h5" mb={2}>
          Article Card
        </Typography>
        <Grid container spacing={4}>
          {[0, 1, 2, 3].map((_, i) => (
            <Grid key={i++} item xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      component="h3"
                      variant="h6"
                      color="secondary.main"
                      fontWeight={'500'}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="caption" color="secondary.main">
                      <IconClock
                        size={16}
                        style={{
                          verticalAlign: 'text-top',
                          marginRight: '.25rem',
                        }}
                      />
                      {post.date}
                      <IconUser
                        size={16}
                        style={{
                          verticalAlign: 'text-top',
                          marginRight: '.25rem',
                          marginLeft: '.25rem',
                        }}
                      />
                      {post.author}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      paragraph
                      my={1}
                      color={'secondary.dark'}
                    >
                      {post.description}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 160,
                      display: { xs: 'none', sm: 'block' },
                    }}
                    image={post.image}
                    alt={post.imageLabel}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardLayout>
  )
}
