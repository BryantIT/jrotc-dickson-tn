import React from 'react'
import './style.css'

const Gallery = () => {
  return (
    <section className='portfolio_section'>
      <div className='container'>
        <div className='custom_heading-container'>
          <h2>Portfolio</h2>
          <hr />
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div className='layout_padding2-top'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-1.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-2.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-3.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-4.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-5.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='img-box'>
                <img src={require('../../assests/imgs/p-6.jpg')} alt='' />
                <a href=''>
                  <img src={require('../../assests/imgs/link.png')} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
