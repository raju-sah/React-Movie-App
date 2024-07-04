import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import MovieCompany from "./Components/MovieCompany";
import GenreMovieList from "./Components/GenreMovieList";
import Loader from "./Components/Loader";
import { useLoader } from "./Hooks/useLoader";

function App() {
  const isLoading = useLoader(500);

  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Slider />
          <MovieCompany />
          <GenreMovieList />
        </>
      )}
    </div>
  );
}

export default App;
