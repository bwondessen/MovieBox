const API_KEY = "78dcd17e9dfc20f3b7a954ad85872f4d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}