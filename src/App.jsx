import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import.meta.env.VITE_OMDB_API_KEY;
console.log(import.meta.env.VITE_OMDB_API_KEY);

function App() {

  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch (
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
      );
      const data = await response.json();
      console.log("Movie Data", data);
      
      if (!data.Response === "False") {
        throw new Error(data.Error || "Movie not found");
      }

      // Set the Movie state to the received data
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  }

  // this will run on the first render but not a subsequent renders
  useEffect(() => {
    const movies = ["Inception", "Titanic", "Avatar", "The Matrix", "Interstellar", "Gladiator", "Pulp Fiction"];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    getMovie(randomMovie);
  }, []);

  return (
    <div className='App'>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App
