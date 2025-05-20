
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favourite from './pages/favourite'
import NabVar from './componenets/NavBar'

function App() {
  return (
    <div>
      <NabVar />
      <main className='main-container'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite/>} />
      </Routes>
    </main>
    </div>
    
  )
}

export default App
