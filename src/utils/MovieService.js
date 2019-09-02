import { API_URI, CLIENT_ID, DB_URI, TMDB_CLIENT_ID, OMDB_URI, OMDB_CLIENT } from '../Config';

export default {
    async getMovieTrack() {
        let response = await fetch(API_URI + '/movies/trending?limit=18', {
            method: "GET",
            headers: {
                "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                "trakt-api-version": 2
            }
        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
    async getMovieDb(id) {
        let response = await fetch(DB_URI + `/movie/${id}?api_key=${TMDB_CLIENT_ID}&language=en-US`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Retry-After": 1
            }
        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
    async getMovieOMDB(id) {
        let response = await fetch(OMDB_URI + `?apikey=${OMDB_CLIENT}&i=${id}`, {
            method: "GET",
        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
}