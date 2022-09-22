import React from 'react'
import './style.css'

const HeroImage = ({ title, subtitle }) => {
  return (
    <div className='hero_wrapper'>
      <div className='hero-image'>
        <div className='hero-text'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
