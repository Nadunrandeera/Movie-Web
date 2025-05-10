
import './App.css'
import MovieCard from './componenets/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{Title: "Tom Rider", Poster: "https://via.placeholder.com/150", release_date: "2023-01-01"}} /> 
      <MovieCard movie={{Title: "Harry potter", Poster: "https://via.placeholder.com/150", release_date: "2005-04-03"}} />
    </>
  )
}

export default App
