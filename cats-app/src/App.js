import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatIndex from './component/cats/CatIndex'
import Home from './component/common/Home'
import Footer from './component/common/Footer'
import Navigation from './component/common/Navigation'

const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/cats' element={<CatIndex />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App