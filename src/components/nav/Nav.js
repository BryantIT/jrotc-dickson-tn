import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RiParentFill, RiShieldUserLine, RiAdminFill } from 'react-icons/ri'
import './style.css'

const Nav = ({ siteData }) => {
  const [title, setTitle] = useState()
  const [menuSelected, setMenuSelected] = useState(true)

  const mainMenuTrigger = () => {
    setMenuSelected(true)
  }
  const parentMenuTrigger = () => {
    setMenuSelected(false)
  }
  return (
    <div className='navbar custom_nav-container'>
      <Link to='/' className='navbar-brand'>
        <img src={require('../../assests/imgs/DCHS-JROTC-Cougar.jpg')} alt='' />
        <span>{title}</span>
      </Link>
      <div className='menu'>
        <div className={menuSelected ? 'menu_wrapper' : ''}>
          <input
            className='menu_input'
            id='btn1'
            name='menu'
            type='radio'
            defaultChecked={true}
          />
          <label className='menu_label' htmlFor='btn1'>
            <div className='icon'>
              <FaBars onClick={mainMenuTrigger} />
            </div>
            <div className='menu_text'>menu</div>
          </label>
          <div className='menu_box'>
            <div>
              <Link to='/about' className='menu_list'>
                About Us
              </Link>
            </div>
            <div className='line'></div>
            <Link to='/news' className='menu_list'>
              News
            </Link>
            <div className='line'></div>
            <Link to='/events' className='menu_list'>
              Events
            </Link>
            <div className='line'></div>
            <Link to='/gallery' className='menu_list'>
              Gallery
            </Link>
            <div className='line'></div>
            <Link to='/contact' className='menu_list'>
              Contact
            </Link>
          </div>
        </div>
        <input className='menu_input' id='btn2' name='menu' type='radio' />
        <label className='menu_label' htmlFor='btn2'>
          <div className='icon'>
            <RiParentFill onClick={parentMenuTrigger} />
          </div>
          <Link to='/parent-info' className='menu_text'>
            Parents
          </Link>
        </label>
        <input className='menu_input' id='btn3' name='menu' type='radio' />
        <label className='menu_label' htmlFor='btn3'>
          <div className='icon'>
            <RiShieldUserLine />
          </div>
          <Link to='/cadet-info' className='menu_text'>
            Cadets
          </Link>
        </label>
        <input className='menu_input' id='btn4' name='menu' type='radio' />
        <label className='menu_label' htmlFor='btn4'>
          <div className='icon'>
            <RiAdminFill />
          </div>
          <Link to='/admin' className='menu_text'>
            Admin
          </Link>
        </label>
      </div>
    </div>
  )
}

export default Nav
