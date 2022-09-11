import React, { useEffect, useState } from 'react'
import SiteDataContext from './SiteDataContext'
// Components
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
// Pages
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// FireBase
import { storage, db } from '../src/firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  // States
  const [siteData, setSiteData] = useState()
  const [loading, setLoading] = useState(true)
  // Get siteData and populate
  const getSiteData = async () => {
    let data
    const query = await getDocs(collection(db, 'site-data'))
    query.forEach((doc) => {
      const info = doc.data()
      data = {
        heroWrapper: info.heroWrapper,
        nav: info.nav,
        aboutPage: info.aboutPage,
      }
    })
    return data
  }
  useEffect(() => {
    getSiteData()
      .then((data) => {
        window.localStorage.setItem('siteData', JSON.stringify(data))
      })
      .then(() => {
        setSiteData(JSON.parse(window.localStorage.getItem('siteData')))
        setLoading(false)
        console.log('APP', JSON.parse(window.localStorage.getItem('siteData')))
      })
  }, [])
  return loading ? null : (
    <div className='app'>
      <Nav siteData={siteData.nav} />
      <Routes>
        <Route path='/' element={<Home siteData={siteData} />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
