import React from 'react'
import './style.css'

const Teams = () => {
  return (
    <section className='service_section layout_padding'>
      <div className='container'>
        <div className='d-flex flex-column align-items-end'>
          <div className='custom_heading-container'>
            <hr />
            <h2>Services</h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='service_container layout_padding2'>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/s-1.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/s1-blue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>web</h6>
              </div>
            </div>
          </a>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/s-2.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/s2-blue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>Graph Design</h6>
              </div>
            </div>
          </a>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/s-3.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/s3-blue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>vector Design</h6>
              </div>
            </div>
          </a>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/s-4.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/s4-blue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>Draw</h6>
              </div>
            </div>
          </a>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/s-5.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/s5-blue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>Cloud</h6>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='read-btn'>
        <a href=''>Read More</a>
      </div>
    </section>
  )
}

export default Teams
