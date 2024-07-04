import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import MovieCompany from './Components/MovieCompany'
import GenreMovieList from './Components/GenreMovieList'
function App() {
  return (
    <div className="">
      <Header/>
      <Slider/>
      <MovieCompany/>
      <GenreMovieList/>
    </div>
  )
}

export default App
