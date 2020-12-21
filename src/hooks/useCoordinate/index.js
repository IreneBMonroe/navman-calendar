import {useState, useEffect} from 'react';
import Request from '../../request';

const useCoordinate = () => {
	let [isFetch, setIsFetch] = useState(false);
	let [coordinate, setCoordinate] = useState({});
	
	useEffect(() => {
		if (isFetch) return;
		getCoordinatesByIP();
	}, [isFetch]);
	
	const getCoordinatesByIP = async () =>{
		const URL = `https://ipapi.co/`;
		
		try {
			Request( `${URL}json/`, 'GET').then(response => {
				console.log(response)
				setCoordinate(response);
				setIsFetch(true);
			});
		} catch (err) {
			console.error(`ERROR(${err.code}): ${err.message}`);
		}
	}
	
	return {coordinate};
};

export default useCoordinate;