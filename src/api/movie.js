import axios from 'axios';

export const getMovies = () =>
  axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=ko&page=1®ion=KR`
  );
