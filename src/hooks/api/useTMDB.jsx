import axios from "axios";

const useTMDB = () => {
  const getLatestMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getNowPlayingMovies = async (page = 1) => {
    try {
      const response = await axios.get(
        ` https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getTVShowsAiringToday = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getLatestMovie,
    getNowPlayingMovies,
    getMovieDetails,
    getTVShowsAiringToday,
  };
};
export default useTMDB;
