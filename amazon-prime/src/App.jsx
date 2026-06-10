import { createContext, useState } from 'react'
import { Introcarousel } from './components/Introcarousel'
import { HeroCarousel } from './components/HeroCarousel/HeroCarousel'
import { Header } from './components/Header/Header'
import { LoginUsers } from './components/Login/Loginusers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

const PrimeContext = createContext()

function App() {


  return (
    <PrimeContext.Provider value={{}}>

      <BrowserRouter>
        <>

          <Header />


          <main>
            <Routes>

              <Route path='/Login' element={<LoginUsers />} />
              <Route path='/Introcarousel' element={<Introcarousel />} />
              <Route path='/Introcarousel' element={<HeroCarousel />} />
            </Routes>


          </main>


        </>
      </BrowserRouter>
    </PrimeContext.Provider>
  )
}

export default App
