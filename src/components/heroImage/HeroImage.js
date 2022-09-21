import React from 'react'
import './style.css'

const HeroImage = ({ title, subtitle }) => {
  return (
    <div className='hero_wrapper'>
      <div class='hero-image'>
        <div class='hero-text'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
