import React from 'react'
import Home from './components/Home/Home'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import './App.css'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
