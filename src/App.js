import React from 'react'
// Components
import Nav from './components/nav/Nav'
// Pages
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="app">
    <Nav />
      <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </div>
  );
}

export default App;
