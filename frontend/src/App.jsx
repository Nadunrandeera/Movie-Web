
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import NabVar from './componenets/NavBar'
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <NabVar />
      <main className='main-container'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
    
  )
}

export default App
