import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '4b9e3e2a2c5b16bb6c51286bdeef04b7'
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) => axios.get(movieBaseUrl+"/discover/movie?api_key="+api_key+"&with_genres="+id);

export default{
    getTrendingVideos,
    getMovieByGenreId
}