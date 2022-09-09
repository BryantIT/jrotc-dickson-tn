import React from 'react'
// Components
import Nav from '../nav/Nav'
import './style.css'

const HeroWrapper = () => {
  return (
    <div className='hero_area'>
      <header className='header_section'>
        <div className='container-fluid'>
          <Nav />
        </div>
      </header>
    </div>
  )
}

export default HeroWrapper
