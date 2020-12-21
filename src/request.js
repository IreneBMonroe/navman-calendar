const Request = async (reqUrl, method, body) => {
	const init = {
		method: method ? method : 'GET',
		mode:'cors', // no-cors, *cors, same-origin
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	};
	
	if (method !== 'GET' && body){
		init.body = JSON.stringify(body);
	}
	
	const abortController = new AbortController();
	
	try {
		return await fetch(`${reqUrl}`, init).then(response => response.json());
	} catch (error) {
		if (abortController.signal.aborted) {
			// cancelled
			console.log('ABORTED >> ', abortController.signal.aborted);
		} else {
			throw error;
		}
	}
};

export default Request;