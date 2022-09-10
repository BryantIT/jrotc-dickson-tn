import React from 'react'
import './style.css'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg custom_nav-container '>
      <a className='navbar-brand' href='index.html'>
        <img src={require('../../assests/imgs/DCHS-JROTC-Cougar.jpg')} alt='' />
        <span>DCHS - JROTC</span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='d-flex mx-auto flex-column flex-lg-row align-items-center'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='index.html'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                About{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='service.html'>
                Services{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='portfolio.html'>
                {' '}
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='news.html'>
                {' '}
                news{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='contact.html'>
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className='quote_btn-container  d-flex justify-content-center'>
          <a href=''>
            <img src={require('../../assests/imgs/call.png')} alt='' />
            CALL : +01 1234567890
          </a>
          <a href=''>
            <span>@</span>
            demo@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
