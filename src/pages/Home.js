import React, { Fragment } from 'react'
// Components
import HeroWrapper from '../components/hero/HeroWrapper'
import About from '../components/about/About'
import Teams from '../components/teams/Teams'
import Gallery from '../components/gallery/Gallery'
import News from '../components/news/News'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <Fragment>
      <HeroWrapper />
      <About />
      <Teams />
      <Gallery />
      <News />
      <Contact />
    </Fragment>
  )
}
export default Home
