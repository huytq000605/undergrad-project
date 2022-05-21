const host = "http://localhost:4000"

export const api = (endpoint, method = "GET") => {
	return fetch(`${host}/${endpoint}`)
}