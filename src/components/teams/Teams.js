import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './style.css'

const Teams = ({ siteData }) => {
  const [title, setTitle] = useState(null)
  const [statement, setStatement] = useState(null)
  const [teamNames, setTeamNames] = useState(null)

  useEffect(() =>{
    setTitle(siteData.title)
    setStatement(siteData.statement)
    setTeamNames(siteData.teamNames)
    console.log(siteData)
  }, [])
  return (
    <section className='service_section layout_padding'>
      <div className='container'>
        <div className='d-flex flex-column align-items-end'>
          <div className='custom_heading-container'>
            <hr />
            <h2>{title ? title : ''}</h2>
          </div>
          <p>
            {statement ? statement : ''}
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='service_container layout_padding2'>
          <Link to='/gridiron-guard' >
          <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/pushup.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/pushupBlue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>{teamNames && teamNames.gridironGuard ? teamNames.gridironGuard : ''}</h6>
              </div>
            </div>
          </Link>
          <Link to='/color-guard'>
          <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/colorguard.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/colorguardBlue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>{teamNames && teamNames.colorGuard ? teamNames.colorGuard : ''}</h6>
              </div>
            </div>
          </Link>
          <a href=''>
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/drillTeam.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/drillTeamBlue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>{teamNames && teamNames.drillTeam ? teamNames.drillTeam : ''}</h6>
              </div>
            </div>
          </a>
          <Link to='air-rifle' >
          <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/airRifle.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/airRifleBlue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>{teamNames && teamNames.airRifle ? teamNames.airRifle : ''}</h6>
              </div>
            </div>
          </Link>
          <a href=''>
            <Link to='archery' >
            <div className='box'>
              <div className='img-box'>
                <img
                  src={require('../../assests/imgs/archery.png')}
                  alt=''
                  className='img-1'
                />
                <img
                  src={require('../../assests/imgs/archeryBlue.png')}
                  alt=''
                  className='img-2'
                />
              </div>
              <div className='name'>
                <h6>{teamNames && teamNames.archery ? teamNames.archery : ''}</h6>
              </div>
            </div>
            </Link>
          </a>
        </div>
      </div>
      <div className='read-btn'>
        <Link to='/teams' >Read More</Link>
      </div>
    </section>
  )
}

export default Teams
