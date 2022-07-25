/* eslint-disable no-unused-vars */
import querystring from 'querystring';
import axios from 'axios';
import auth from './auth';
import router from './router';
import util from './util';


const SerasinhaApi = axios.create({ timeout: 3600000, baseURL: 'https://app-serasinhadb.herokuapp.com' });

function login({ email, password }) {
	return SerasinhaApi
		.post('login', { email, password })
		.then((res) => {
            console.log('res', res)
            if (res.status !== 200) {
                alert('Erro durante o login!')
                return Promise.reject(new Error('login failed'))
            }
            const { data } = res;
            if (!data.userId) {
                return alert('Login inválido!');
            }
            auth.setAuth(data);
            return router.push('/');
        }).catch(err => {
            alert('Erro durante o login!')
        });
}

function logout() {
    return auth.unsetAuth();
}

function register({ email, password, name, phone }) {
	return SerasinhaApi
		.post('register/user', { email, password, name, phone })
		.then((res) => {
            if (res.status !== 200) {
                alert('Erro durante o registro!')
                return Promise.reject(new Error('register failed'))
            }
            const { data } = res;
            auth.setAuth(data);
            return router.push('/');
        }).catch(err => {
            alert('Erro durante o registro!')
        });
}

function getMainMenuData({ userId }) {
	return SerasinhaApi
		.get(`transaction?${querystring.stringify({ id: userId })}`)
		.then((res) => {
            console.log('ENTROU')
            if (res.status !== 200) {
                alert('Erro durante a busca pelos dados!')
                return Promise.reject(new Error('login failed'))
            }

            const { data } = res;
            console.log('data', data);
            return {
                score: data.score,
                walletValue: data.amount - data.transactions.reduce((acc, curr) => {
                    return acc += curr.value
                }, 0),
                transactions: data.transactions.map(el => ({
                    receiverAccountId: el.seller_account_id,
                    valor: util.moneyFormater(el.value),
                    data: el.date,
                }))
            };
        }).catch(err => {
            alert('Erro durante a busca pelos dados!')
            return {};
        });
}

function transferValue({ emailToSend, transferValue, accountId }) {
	return SerasinhaApi
		.post('transaction', querystring.stringify({
            email:emailToSend,
            value: transferValue,
            buyer_account_id: accountId }))
		.then((res) => {
            if (res.status !== 200) {
                alert('Erro durante a transferência!')
                return Promise.reject(new Error('transfer error'))
            }
        }).catch(err => {
            alert('Erro durante a transferência!')
        });
}


export const SerasinhaService = {
	login,
    register,
    getMainMenuData,
    transferValue,
    logout,
}