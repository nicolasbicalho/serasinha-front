/* eslint-disable no-unused-vars */
import axios from 'axios';
import auth from './auth';
import router from './router';
import util from './util';


const SerasinhaApi = axios.create({ timeout: 3600000, baseURL: 'https://serasinha.herokuapp.com' });

function login({ email, password }) {
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

function logout() {
    return auth.unsetAuth();
}

function register({ email, password }) {
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

function getMainMenuData() {
    console.log('getMainMenuData');
    const transactions = [{
        data: '15/07/2022',
        valor: 42,
        tipo: 'Enviado',
    }, {
        data: '15/07/2022',
        valor: 42,
        tipo: 'Enviado',
    }, {
        data: '15/07/2022',
        valor: 42,
        tipo: 'Enviado',
    }, {
        data: '15/07/2022',
        valor: 42,
        tipo: 'Enviado',
    }, {
        data: '15/07/2022',
        valor: 42,
        tipo: 'Enviado',
    }];

    return {
        walletValue: 58,
        score: 9.5,
        transactions: transactions.map(el => ({ ...el, valor: util.moneyFormater(el.valor) }))
    }
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

function transferValue({ emailToSend, transferValue }) {
    console.log('emailToSend', emailToSend);
    console.log('transferValue', transferValue);

    return 'ok';

	// return SerasinhaApi
	// 	.get('transfer-value', { email, password })
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
    getMainMenuData,
    transferValue,
    logout,
}