import React, { Fragment, useState, useEffect } from 'react'
// Components
import HeroWrapper from '../components/hero/HeroWrapper'
import About from '../components/about/About'
import Teams from '../components/teams/Teams'
import Gallery from '../components/gallery/Gallery'
import News from '../components/news/News'
import Contact from '../components/contact/Contact'

const HomePage = ({ siteData }) => {
  return (
    <Fragment>
      <HeroWrapper siteData={siteData.heroWrapper} />
      <About siteData={siteData.aboutPage} />
      <Teams siteData={siteData.teamsPage} />
      <Gallery siteData={siteData.galleryPage} />
      <News siteData={siteData.newsPage} />
      <Contact />
    </Fragment>
  )
}
export default HomePage
