import React, { Fragment } from 'react'
// Components
import HeroWrapper from '../components/hero/HeroWrapper'
import About from '../components/about/About'
import Teams from '../components/teams/Teams'
import Gallery from '../components/gallery/Gallery'

const Home = () => {
  return (
    <Fragment>
      <HeroWrapper />
      <About />
      <Teams />
      <Gallery />
    </Fragment>
  )
}
export default Home
