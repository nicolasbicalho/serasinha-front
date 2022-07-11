/* eslint-disable no-unused-vars */
import axios from 'axios';
import auth from './auth';
import router from './router';


const SerasinhaApi = axios.create({ timeout: 3600000, baseURL: 'https://serasinha.herokuapp.com' });

function login ({ email, password }) {
    const token = '123456';

    auth.setAuth(token, email);
    router.push('/')
	// return SerasinhaApi
	// 	.post('login', { email, password })
	// 	.then((res) => {
    //         if (res.status !== 200) {
    //             return Promise.reject(new Error('login failed'))
    //         }
    //         const token = res.text().then(JSON.parse);
    //         auth.setAuth(token, email);
    //         return router.push('/');
    //     })
}

function register ({ email, password }) {
    const token = '123456';

    auth.setAuth(token, email);
    router.push('/')
	// return SerasinhaApi
	// 	.post('register', { email, password })
	// 	.then((res) => {
    //         if (res.status !== 200) {
    //             return Promise.reject(new Error('login failed'))
    //         }
    //         const token = res.text().then(JSON.parse);
    //         auth.setAuth(token, email);
    //         return router.push('/');
    //     })
}


export const SerasinhaService = {
	login,
    register,
}