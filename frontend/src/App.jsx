
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favourite from './pages/Favourite'

function App() {
  return (
    <main className='main-container'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite/>} />
      </Routes>
    </main>
  )
}

export default App
