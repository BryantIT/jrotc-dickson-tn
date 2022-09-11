import React, { useState, useEffect, Fragment } from 'react'
import { Link } from "react-router-dom"
// Components
import './style.css'

const Nav = ({ siteData }) => {
  const [title, setTitle] = useState()
  const [showSubNav, setShowSubNav] = useState(false)
  const [subNavOptions, setSubNavOptions] = useState()

  useEffect(() => {
    setTitle(siteData.title)
  }, [])
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg custom_nav-container '>
    <Link to='/' className='navbar-brand'>
    <img src={require('../../assests/imgs/DCHS-JROTC-Cougar.jpg')} alt='' />
        <span>{ title }</span>
    </Link>
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
            <Link 
            to='/' 
            className='nav-link'
             >Home</Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/about' 
            className='nav-link'
            >About
            </Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/cadet-info' 
            className='nav-link'
            >Cadet Info
            </Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/parent-info' 
            className='nav-link'
            >Parent Info
            </Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/news' 
            className='nav-link'
             >News
             </Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/events' 
            className='nav-link'
             >Events
             </Link>
            </li>
            <li className='nav-item'>
            <Link 
            to='/gallery' 
            className='nav-link'
             >Gallery
             </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contact' className='nav-link' >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Fragment>
  )
}

export default Nav
