import React from 'react'
// Icons
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaTiktok,
  FaGraduationCap,
} from 'react-icons/fa'
// Style
import './style.css'

const Nav = () => {
  return (
    <nav className='fh5co-nav' role='navigation'>
      <div className='top-menu'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-2'>
              <div id='fh5co-logo'>
                <a href='index.html'>
                <i><FaGraduationCap /></i>
                  Educ<span>.</span>
                </a>
              </div>
            </div>
            <div className='col-xs-10 text-right menu-1'>
              <ul>
                <li className='active'>
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <a href='courses.html'>Courses</a>
                </li>
                <li>
                  <a href='teacher.html'>Teacher</a>
                </li>
                <li>
                  <a href='about.html'>About</a>
                </li>
                <li>
                  <a href='pricing.html'>Pricing</a>
                </li>
                <li className='has-dropdown'>
                  <a href='blog.html'>Blog</a>
                  <ul className='dropdown'>
                    <li>
                      <a href='#'>Web Design</a>
                    </li>
                    <li>
                      <a href='#'>eCommerce</a>
                    </li>
                    <li>
                      <a href='#'>Branding</a>
                    </li>
                    <li>
                      <a href='#'>API</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
                <li className='btn-cta'>
                  <a href='#'>
                    <span>Login</span>
                  </a>
                </li>
                <li className='btn-cta'>
                  <a href='#'>
                    <span>Create a Course</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
