import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        { id: 1, title: "John Wick", release_date: "2023" },
        { id: 2, title: "Terminator", release_date: "1984" },
        { id: 3, title: "The Matrix", release_date: "1999" }
    ];

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    );
}

export default Home;