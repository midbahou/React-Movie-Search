

function MovieDisplay({ movie }) {
    
    const loaded = () => {
    return (
        <div className="movie-card">
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <h2>Genre: {movie.Genre}</h2>
        <div className="rating">Rating: {movie.Ratings?.[0]?.Value || "N/A"}</div>
        <p><b>Story: </b>{movie.Plot}</p>
        <img src={movie.Poster} alt={`Poster for ${movie.Title}`} className="movie-poster"/>
        </div>
    )
};

function loading (){
    return  <h1>No Movie to display!</h1>;
}

return movie ? loaded() : loading();
}

export default MovieDisplay;

