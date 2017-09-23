import axios from 'axios';

const API_KEY = 'a98859e0f5cb9b3c9d8ee44fabb00108';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // returns a promise which is attached to payload key

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
