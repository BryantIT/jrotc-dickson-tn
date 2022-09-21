import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
// Components
import HeroImage from '../heroImage/HeroImage'
import './style.css'

const AboutFull = ({ siteData }) => {
  const [purpose, setPurpose] = useState(null)
  const [introTitle, setIntroTitle] = useState(null)
  const [heroTitle, setHeroTitle]  = useState(null)
  const [heroSubTitle, setHeroSubTitle] = useState(null)
  useEffect(() => {
    setPurpose(siteData.purpose)
    setIntroTitle(siteData.introTitle)
    setHeroTitle(siteData.heroTitle)
    setHeroSubTitle(siteData.heroSubTitle)
  }, [siteData])
  return (
    <Fragment>
      <HeroImage title={heroTitle} subtitle={heroSubTitle} />
    <section className='about_section layout_padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='detail-box'>
              <h6>About</h6>
              <div className='custom_heading-container'>
                <h2>{introTitle ? introTitle : ''}</h2>
                <hr />
              </div>
              <p>{purpose ? purpose : ''}</p>
              <div>
                <Link to='/about'>Read More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='img-box'>
              <img
                src={require('../../assests/imgs/DCHS-JROTC-Cougar-noBG.png')}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default AboutFull
