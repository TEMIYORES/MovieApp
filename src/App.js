import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=90dd9ef3";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  }, [search]);
  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      <div className="container">
        {movies?.length ? (
          movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })
        ) : (
          <h1>No movies found.</h1>
        )}
      </div>
    </div>
  );
};

export default App;
