import MovieCard from './MovieCard/MovieCard';


const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div className="container">
      <div className="row">

      
      {moviesList
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
        </div>
    </div>
  );
};

export default MoviesList;
