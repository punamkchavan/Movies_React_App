import AddMovies from './AddMovies';
import MoviesList from './MoviesList';
import './Movies.css';
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

     try {
    const response = await axios.get(
      "https://movies-2c3b3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    );

    const data = response.data;

    if (!data) {
      setMovies([]);
      return;
    }

    
      const loadedMovies = [];

            for (const key in data) {
            loadedMovies.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate,
            });
            }

    } catch (error) {
      setError(error.message);
    } finally {
    setIsLoading(false);   
  }
  }, []);


  async function addMovieHandler(movie) {
  try {
    const response = await axios.post(
      "https://movies-2c3b3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      movie
    );

    console.log(response.data);
    fetchMoviesHandler(); 
  } catch (error) {
    console.log(error);
  }
}

    useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  
  return (
    <div className="container">
      <AddMovies onAddMovie={addMovieHandler} />

      <h1 className="heading">🎬 Star Wars Movies</h1>

      <button className="button" onClick={fetchMoviesHandler}>
        Fetch Movies
      </button>

      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!isLoading && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}