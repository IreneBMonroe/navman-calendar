import React, {useState, useEffect} from 'react';
import Request from '../../request';
import useCoordinate from "../../hooks/useCoordinate";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud, faCloudRain, faSun, faWind, faSnowflake} from '@fortawesome/free-solid-svg-icons'
import buildUrl from 'build-url';

//To REMOVE Security Risk
const OPEN_APP_ID = process.env.REACT_APP_OPEN_KEY;

const WeatherReport = () => {
	let {coordinate} = useCoordinate();
	const [icon, setIcon] = useState(faSun);
	const [temp, setTemp] = useState();
	const [condition, setCondition] = useState();
	// Need to find weather service that allow to query by date.
	const WEATHER_URL = buildUrl('https://cors-anywhere.herokuapp.com/', {
		path: 'https://api.openweathermap.org/data/2.5/onecall',
		queryParams: {
			exclude: 'minutely',
			appid: OPEN_APP_ID,
			lat: coordinate.latitude,
			lon: coordinate.longitude,
			unit: 'metric'
		}
	});
	useEffect(() => {
		fetchDailyWeather();
	}, [coordinate.latitude]);
	
	const fetchDailyWeather = async () => {
		if (!coordinate) return;
		try {
			Request(WEATHER_URL).then(response => {
				if (response.current && response.current.weather.length > 0) {
					setTemp(`${Math.floor(response.current.temp / 10)}°C`);
					setCondition(response.current.weather[0].main);
					switch (response.current.weather[0].main) {
						case 'Clear':
						case 'clear sky':
							setIcon(faSun);
							break;
						case 'Rain':
						case 'Shower rain':
						case 'light rain':
							setIcon(faCloudRain);
							break;
						case 'Windy':
							setIcon(faWind);
							break;
						case 'Cloudy':
						case 'broken clouds':
							setIcon(faCloud);
							break;
						case 'snow':
							setIcon(faSnowflake);
							break;
					}
				}
			});
		} catch (err) {
			console.error(`ERROR(${err.code}): ${err.message}`);
		}
	};
	
	return (
		<div className="text-center py-lg-5">
			<FontAwesomeIcon className="mb-4 text-white" icon={icon} size="6x"/>
			<div className={`text-uppercase text-white`}><h2 className={`font-weight-normal mb-2`}>{temp}</h2>
				<small className={`text-capitalize text-white`}>{condition}</small></div>
		</div>
	);
}

export default WeatherReport;
