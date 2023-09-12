import { Routes, Route } from 'react-router-dom';

import { Perfil } from '../pages/Perfil';
import { Home } from '../pages/Home';
import { CreateMovie } from '../pages/CreateMovie';
import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/create' element={<CreateMovie />} />
      <Route path='/preview' element={<MoviePreview />} />
    </Routes>
  )
}