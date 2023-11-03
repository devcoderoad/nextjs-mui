import { useMemo } from 'react'
import { Button, Box, Typography, Container, Grid, Stack } from '@mui/material'

// import GitHubIcon from '@mui/icons-material/GitHub'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'

import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined'

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
  {
    title: 'Post title',
    date: 'Nov 11, 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    like: 275,
    view: '66.3k',
  },
]

export default function BlogCard() {
  // const cssCard = useMemo(
  //   () => ({
  //     background:
  //       'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80) top center no-repeat',
  //     backgroundSize: 'cover',
  //     position: 'relative',
  //     display: 'block',
  //     height: '100%',
  //     minHeight: '320px',
  //     zIndex: 0,
  //     color: 'white',
  //     textShadow: '2px 2px 15px #000000',
  //     pl: '1rem',
  //     pt: '1rem',
  //     ':after': {
  //       content: '" "',
  //       position: 'absolute',
  //       left: 0,
  //       right: 0,
  //       zIndex: 0,
  //       width: '100%',
  //       height: '100%',
  //       top: 0,
  //       bottom: 0,
  //       background:
  //         'linear-gradient(180deg,rgba(2,0,36,0) 15%,rgba(0,0,0,.8));',
  //     },
  //   }),
  //   []
  // )
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={5} paddingTop={9} paddingBottom={9}>
        {featuredPosts.map((post: any, i: number) => (
          <Grid item key={post + i} lg={3}>
            <Box
              boxShadow={4}
              borderRadius={2}
              position="relative"
              marginBottom={0.75}
              minHeight="230px"
              sx={{
                backgroundImage: `url(${post.image})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
                zIndex: 1,
                transition: 'all ease .5s',
                '.boxHover': {
                  transition: 'linear .15s',
                  transform: 'translateY(10px)',
                  opacity: 0,
                  color: 'white',
                  paddingX: 2,
                  position: 'absolute',
                  bottom: 0,
                  ':before': {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                    backgroundImage:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.95))',
                    // transform: "translate(-20px, -20px)",
                    // boxShadow:
                    //   "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)",
                    // backgroundColor: `rgba(0,0,0,0.75)`,
                  },
                },
                ':hover': {
                  '.boxHover': {
                    transform: 'translateY(0)',
                    opacity: 1,
                  },
                },
              }}
            >
              <Box className="boxHover">
                <Typography component="h4">{post.title}</Typography>
                <Box component="p">{post.description}</Box>
              </Box>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<AccessTimeIcon fontSize="small" />}
                >
                  {post.date}
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<FavoriteIcon fontSize="small" />}
                >
                  {post.view}
                </Button>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<VisibilityIcon fontSize="small" />}
                >
                  {post.like}
                </Button>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
      {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the staff" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
    </Container>
  )
}
