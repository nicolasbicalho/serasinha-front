import router from './router'

function setAuth (token, email) {
	localStorage.setItem('token', token)
	localStorage.setItem('email', email)
}

function unsetAuth () {
	localStorage.clear()
	router.push('/login')
}

function getAuthHeader () {
	const token = localStorage.getItem('token')
	if (!token) return {}
	return {
		'Authorization': 'Bearer ' + token
	}
}

function getToken () {
	return localStorage.getItem('token')
}

export default {
	setAuth,
	unsetAuth,
	getAuthHeader,
	getToken
}
