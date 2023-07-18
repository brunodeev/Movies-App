import axios from 'axios';

// URL Filmes em cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=9edd7e9a8e03559484ab47fe834957f0&language=pt-BR&page=1

export const key = '9edd7e9a8e03559484ab47fe834957f0';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;