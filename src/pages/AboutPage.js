import React, { Fragment, useState, useEffect } from 'react'
// Components
import AboutFull from '../components/about/AboutFull'

const AboutPage = ({ siteData }) => {
  return (
    <AboutFull siteData={siteData.aboutPage} />
  )
}
export default AboutPage
