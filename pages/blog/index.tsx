import * as React from 'react'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

import matter from 'gray-matter'

import Header from '@components/Blog/Header'
import MainFeaturedPost from '@components/Blog/MainFeaturedPost'
import FeaturedPost from '@components/Blog/FeaturedPost'
import Main from '@components/Blog/Main'
import Sidebar from '@components/Blog/Sidebar'
import Footer from '@components/Blog/Footer'

const post1 = `---
title: Bring to the table win-win survival strategies to ensure proactive domination
author: "Watson & Crick "
date: "2019-07-10T16:04:44.000Z"
hero_image: /norris-niman-iceland.jpg
---

<!-- excerpt test lorme ipsumr 1 -->

## At the end of the day, going forward, a new normal that has evolved

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
`
const post2 = `---
title: Iterative approaches to corporate strategy
author: "Watson & Crick "
date: "2019-07-10T16:04:44.000Z"
hero_image: /norris-niman-iceland.jpg
---

<!-- excerpt test lorme ipsumr 2 -->

## Leverage agile frameworks to provide a robust synopsis for high level

Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
`

const post3 = `---
title: Nanotechnology immersion along the information highway
author: "Watson & Crick "
date: "2019-07-10T16:04:44.000Z"
hero_image: /norris-niman-iceland.jpg
---

<!-- excerpt test lorme ipsumr 3 -->

## Override the digital divide with additional clickthroughs from DevOps

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
`

const sections = [
  { title: 'Freelancing', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Economy', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what is most interesting in this posts contents.',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const featuredPosts = [
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

const posts = [post1, post2, post3].map((key) => {
  return matter(key, { excerpt: false, excerpt_separator: '-->' })
})

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

export default function Blog() {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the staff" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  )
}
