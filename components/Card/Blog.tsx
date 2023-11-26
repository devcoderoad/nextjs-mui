import { useMemo } from 'react'
import {
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Theme,
} from '@mui/material'

// import GitHubIcon from '@mui/icons-material/GitHub'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'

import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined'

/* 
Black as grinder grounds doppio, flavour robust, id variety, black ristretto aromatic, strong grinder cultivar french press iced robust. Filter robusta chicory irish caramelization fair trade redeye extra chicory, crema crema redeye, cultivar decaffeinated caramelization that spoon. Turkish, a milk as flavour crema, americano ut acerbic, brewed aroma java cinnamon frappuccino arabica. Cup turkish, and flavour in froth et, sweet, fair trade whipped kopi-luwak shop, dark rich barista java a, doppio aroma dark irish latte.

Decaffeinated organic aromatic extra  latte black galão caffeine, caramelization iced turkish sugar affogato, mazagran dark, kopi-luwak spoon affogato cup beans. Shop medium, whipped roast, cappuccino, affogato milk skinny aged, pumpkin spice black cup rich, at, iced cortado kopi-luwak breve filter. Americano, in organic dark, a variety sweet, whipped single shot mazagran, extra  barista chicory body, fair trade, dripper so whipped acerbic foam. Java con panna sweet foam body viennese single origin foam half and half irish carajillo redeye milk.
 */

const featuredPosts = [
  {
    category: 'Coffee',
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
    category: 'Beverage',
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
    category: 'Food & Snack',
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
    category: 'Desert',
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
  {
    category: 'Recipe',
    title: 'Instant latte fair trade barista arabica half',
    date: 'Nov 11, 2022',
    description:
      'Instant latte fair trade barista arabica half and half blue mountain steamed robusta cortado fair trade.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    category: 'Table',
    title: 'White roast cultivar, id, robust and variety as aged robusta',
    date: 'Nov 11, 2022',
    description:
      ' Crema aged mocha single origin mazagran frappuccino coffee, organic, mocha mazagran white roast cultivar, id, robust and variety as aged robusta.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    category: 'Booking',
    title: 'As a natural lead-in to additional content',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    category: 'Dinner',
    title: 'Single origin in steamed instant beans',
    date: 'Nov 24, 2023',
    description:
      'Aroma, shop robusta, single shot sugar that cappuccino, saucer and macchiato, a lungo, plunger pot dark frappuccino, single origin in steamed instant beans',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
]

export default function BlogCard() {
  const cssFeatured = useMemo(() => {
    return {
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
      zIndex: 1,
      transition: 'all ease .5s',
      '.boxHover': {
        transition: 'transform ease .175s',
        transform: 'translateY(12px)',
        // opacity: 0,
        color: 'white',
        paddingX: 2,
        position: 'absolute',
        bottom: 0,
        ':before': {
          content: '" "',
          position: 'absolute',
          top: -80,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.95))',
        },
      },
      '.boxDesc': {
        transition: 'opacity ease .275s, height ease .175s',
        opacity: 1,
        height: 0,
      },
      ':hover': {
        boxShadow: 'var(--drop-shadow)',
        '.boxHover': {
          transform: 'translateY(0)',
        },
        '.boxDesc': {
          opacity: 1,
          height: '100%',
        },
      },
    }
  }, [])

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={[2, 2]}
        my={2}
        sx={{
          '.MuiGrid-item': {
            borderRadius: '20px',
          },
        }}
      >
        {featuredPosts.map((post: any, i: number) => (
          <Grid item key={post + i} lg={3}>
            <Box
              boxShadow={4}
              borderRadius={2}
              position="relative"
              // marginBottom={0.75}
              minHeight="230px"
              sx={cssFeatured}
              style={{
                backgroundImage: `url(${post?.image})`,
              }}
            >
              <Box className="boxHover">
                <Typography
                  component="h4"
                  fontWeight={'600'}
                  fontSize={18}
                  lineHeight={1.25}
                  mb={1}
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" paragraph className="boxDesc">
                  {post.description}
                </Typography>
              </Box>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              className="stackBlog"
            >
              <Box>
                <Button
                  size="small"
                  variant="text"
                  color="secondary"
                  startIcon={<AccessTimeIcon fontSize="small" />}
                >
                  {post.date}
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="text"
                  color="secondary"
                  startIcon={<FavoriteIcon fontSize="small" />}
                >
                  {post.view}
                </Button>
                <Button
                  size="small"
                  variant="text"
                  color="secondary"
                  startIcon={<VisibilityIcon fontSize="small" />}
                >
                  {post.like}
                </Button>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
