import React, { Fragment } from 'react'
// Components
import HeroWrapper from '../components/hero/HeroWrapper'
import About from '../components/about/About'
import Teams from '../components/teams/Teams'

const Home = () => {
  return (
    <Fragment>
      <HeroWrapper />
      <About />
      <Teams />
    </Fragment>
  )
}
export default Home
