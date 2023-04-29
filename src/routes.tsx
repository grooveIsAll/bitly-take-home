import { Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import CharacterIndex from './components/RickAndMorty/CharacterIndex'
import CharacterProfile from './components/RickAndMorty/CharacterProfile'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rick-and-morty" element={<CharacterIndex />} />
      <Route path="/rick-and-morty/:id" element={<CharacterProfile />} />
    </Routes>
  )
}


export default Router