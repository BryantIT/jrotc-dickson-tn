import React from 'react'
// Components
import Nav from '../nav/Nav'
import Slider from '../slider/Slider'
import './style.css'

const HeroWrapper = ({ siteData }) => {
  return (
    <div className='hero_area'>
      <header className='header_section'>
        <div className='container-fluid'>
          <Slider siteData={siteData.slider} />
        </div>
      </header>
    </div>
  )
}

export default HeroWrapper
