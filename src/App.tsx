import './App.css'
import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from 'react-router';
import DrawerAppBar from './Nav'
import Test from './Test';
import FunFact from './FunFact';

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/fun-fact' element={<FunFact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
