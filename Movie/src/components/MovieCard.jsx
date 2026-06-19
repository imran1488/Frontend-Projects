import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorties, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  console.log('MovieCard render:', { id: movie.id, title: movie.title, favorite });

  function onFavouriteClick(event) {
    event.preventDefault();
    console.log('toggle favorite click:', { id: movie.id, title: movie.title, favorite });
    if (favorite) removeFromFavorties(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
            {' '}
            ❤️{' '}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
