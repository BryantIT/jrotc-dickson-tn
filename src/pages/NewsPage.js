import React, { Fragment, useState, useEffect } from 'react'
// Components
import NewsFull from '../components/news/NewsFull'

const HomePage = ({ siteData }) => {
  return (
    <Fragment>
      {/* <HeroWrapper siteData={siteData.heroWrapper} /> */}
      <NewsFull siteData={siteData.newsPage}/>
    </Fragment>
  )
}
export default HomePage
