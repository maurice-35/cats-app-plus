import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatIndex from './component/cats/CatIndex'
import Home from './component/common/Home'
import Navigation from './component/common/Navigation'

const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/cats' element={<CatIndex />} />
        <Route exact path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App