import axios from 'axios';

export async function getGenres () {
    try {
        const response = await axios.get('https://api.rawg.io/api/genres?key=138928ecbd4e49cebe4c7a94d4716fbf')
        const order_data = response.data.results.sort((a, b) => b.games_count - a.games_count)
        const data = order_data.slice(0, 5).map((genre) => ({
            value: genre.games_count,
            name: genre.name
          }));
        return data
    }
    catch(error) {
        return error
    }
}