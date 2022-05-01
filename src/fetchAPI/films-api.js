import axios from "axios";

const BASE_URL = "http://api.themoviedb.org"
const API_KEY = "0cc59fcf1e5da911ea426bde22319681"

export async function fetchTrending() { 
    const response = await axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`)
    return response.data.results;
}
export async function fetchSearchMovies(searchQuery) { 
     await axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}page=1&include_adult=true`)
}
// export async function fetchMovieDetails() { 
//     const response = await axios.get(`${BASE_URL}/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`)
//     return response.data;
// }
// export async function fetchMovieCast() { 
//     const response = await axios.get(`${BASE_URL}/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`)
//     return console.log(response.data);
// }
// export async function fetchMovieReviews() { 
//     const response = await axios.get(`${BASE_URL}/3/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
//     return console.log(response.data);
// }