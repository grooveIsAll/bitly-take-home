import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import RickAndMoryRoutes from './components/RickAndMorty/CharacterRoutes'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rick-and-morty/*" element={<RickAndMoryRoutes />} />
    </Routes>
  )
}


export default Router