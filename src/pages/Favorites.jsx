import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();
    const hasFewCards = favorites.length < 4;

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <h2>No favorites yet</h2>
                    <p>Add some movies to your favorites to see them here!</p>
                </div>
            ) : (
                <div className={`movies-grid ${hasFewCards ? "few-cards" : ""}`}>
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
