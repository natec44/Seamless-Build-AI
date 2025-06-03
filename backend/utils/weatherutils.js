import axios from 'axios';

export const getWeatherForecast = async (location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch weather forecast');
  }
};
