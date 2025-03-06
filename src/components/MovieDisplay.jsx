

function MovieDisplay({ movie }) {
    
    const loaded = () => {
    return (
        <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <h2>{movie.Year}</h2>
        <h2>Rating: {movie.Ratings[0].Value}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        </>
    )
};

function loading (){
    return  <h1>No Movie to display!</h1>;
}

return movie ? loaded() : loading();
}

export default MovieDisplay;

