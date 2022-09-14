import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { RiParentFill } from "react-icons/ri"

const NavTest = () => {
  const [isChecked, setIsChecked] = useState({
    menu: true,
    parents: false
  })

  const handleMenuChange = (option) => {
    switch (option) {
      case 'menu':
        isChecked.menu = true
        isChecked.parents = false
        break
        case 'parents':
        isChecked.menu = false
        isChecked.parents = true
        break
      default:
        return option
    }
  }
  return (
  <div className='custom_nav-container' >
    <div className="menu">
  <input 
  defaultChecked={ true } 
  className="menu_input" 
  id="btn1" 
  name="menu" 
  type="radio"
  />
  <label className="menu_label" for="btn1">
    <div className="icon"><FaBars /></div>
    <div className="menu_text">
      menu
    </div>
  </label>
  <div className="menu_box">
    <div className="menu_list">
      About Us
    </div>
    <div className='line' ></div>
    <div className="menu_list">
      Contact Us Contact Us
    </div>
    <div className='line' ></div>
    <div className="menu_list">
      Contact Us
    </div>
    <div className='line' ></div>
    <div className="menu_list">
      Contact Us
    </div>
    <div className='line' ></div>
    <div className="menu_list">
      Contact Us
    </div>
    <div className='line' ></div>
  </div>
  <input 
  className="menu_input" 
  id="btn2" 
  name="menu" 
  type="radio" 
  />
  <label className="menu_label" for="btn2">
    <div className="icon"><RiParentFill /></div>
    <div className="menu_text">
      users
    </div>
  </label><input className="menu_input" id="btn3" name="menu" type="radio" />
  <label className="menu_label" for="btn3">
    <div className="fa fa-comments"></div>
    <div className="menu_text">
      chat
    </div>
  </label><input className="menu_input" id="btn4" name="menu" type="radio" />
  <label className="menu_label" for="btn4">
    <div className="fa fa-cog"></div>
    <div className="menu_text">
      edit
    </div>
  </label>
</div>
  </div>
  )
}

export default NavTest