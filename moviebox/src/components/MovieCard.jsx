import "../css/MovieCard.css";

function MovieCard({movie}) {
    function favorite() {
        alert("Favorited!")
    }

    return (
        <div className="movie-card">
            <div class="movie-poster">
                <img src={`https://image.tmbd.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div class="movie-overlay">
                     <button class="favorite-btn" onClick={favorite}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;