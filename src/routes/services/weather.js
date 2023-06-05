import axios from 'axios';
// const { X_RapidAPI_Key, X_RapidAPI_Host } = process.env

const options = {
    method: 'GET',
    headers: {
      /*
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
      */
      'X-RapidAPI-Key': '83c52fa10amsha25aa3a4c1e6a3cp1fde5ajsn06e4db596ebf',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

export async function getWeatherFrom (query = 'Buenos Aires') {
  try{
    const response = await axios.request(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, options);
    const {location, current} = response.data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
    const { code, icon } = condition
    return {
        conditionCode: code,
        conditionIcon: icon,
        country,
        localTime: localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir

}
  }
  catch (error) {
    return error
  }
}

