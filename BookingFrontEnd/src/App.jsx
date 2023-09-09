import {  } from 'react'
import './App.css'

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import List from './Pages/HotalList/List';
import HotalRoom from './Pages/Hostals/HotalRoom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Hotels' element={<List/>} />
        <Route path='/Hotels/:id' element={<HotalRoom/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
