import axios from 'axios';

const options = {
    headers: {
      'X-RapidAPI-Key': '83c52fa10amsha25aa3a4c1e6a3cp1fde5ajsn06e4db596ebf',
      'X-RapidAPI-Host': 'atmosphere-methane-concentration.p.rapidapi.com'
    }
  };
export async function getFifaRank () {
    try {
        let clean_data
        const response = await axios.get('https://atmosphere-methane-concentration.p.rapidapi.com/api/methane-api',options);
        for ( let i = 0; i > 7 ; i++) {
            clean_data = response.data.methane.filter((e) => e.date.contain(i))
        }
        console.log(clean_data);
        console.log(response.data.methane);
    } catch (error) {
        console.error(error);
    }
}
