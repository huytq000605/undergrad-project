const host = "http://localhost:4000"

export const api = (endpoint, method = "GET") => {
	return fetch(`${host}/${endpoint}`)
}

export const postApi = async (endpoint, body) => {
	return await fetch(`${host}/${endpoint}`, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	  });
}