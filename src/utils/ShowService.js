import { API_URI, CLIENT_ID, DB_URI, TMDB_CLIENT_ID } from '../Config';

export default {
    async getShowTrack() {
        let response = await fetch(API_URI + '/shows/trending?limit=18', {
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
    async getShowDb(id) {
        let response = await fetch(DB_URI + `/tv/${id}?api_key=${TMDB_CLIENT_ID}&language=en-US`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Retry-After": 1
            }
        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
}