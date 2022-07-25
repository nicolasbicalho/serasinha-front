import router from './router'

function setAuth (data) {
	localStorage.setItem('userId', data.id);
	localStorage.setItem('accountId', data.accountId);
	localStorage.setItem('name', data.name);
	localStorage.setItem('email', data.email);
	localStorage.setItem('phone', data.phone);
}

function unsetAuth () {
	localStorage.clear()
	router.push('/login')
}

function getToken () {
	return localStorage.getItem('userId')
}

export default {
	setAuth,
	unsetAuth,
	getToken
}
