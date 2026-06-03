import { useState } from 'react'
import { Introcarousel } from './components/Introcarousel'
import { HeroCarousel } from './components/HeroCarousel/HeroCarousel'
import { Header } from './components/Header/Header'

import './App.css'

function App() {


  return (
    <>
  <Header />
  <Introcarousel />
  {/* <HeroCarousel /> */}
    </>
  )
}

export default App
