import React from 'react'
// Components
import HeroWrapper from './components/hero/HeroWrapper'
// Pages
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='app'>
      <HeroWrapper />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
