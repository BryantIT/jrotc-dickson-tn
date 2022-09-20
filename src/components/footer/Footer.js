import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <section className='info_section layout_padding'>
      <div className='container'>
        <div className='info_social'>
          <div>
            <a href=''>
              <img src={require('../../assests/imgs/fb.png')} alt='' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src={require('../../assests/imgs/twitter.png')} alt='' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src={require('../../assests/imgs/linkedin.png')} alt='' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src={require('../../assests/imgs/insta.png')} alt='' />
            </a>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
