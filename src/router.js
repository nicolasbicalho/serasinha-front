import * as VueRouter from 'vue-router';
import auth from './auth';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
	routes: [
        {
            path: '/login',
            component: () => import('./pages/Login')
        },
        {
            path: '/register',
            component: () => import('./pages/Register')
        },
        {
            path: '/',
            component: () => import('./pages/MainMenu')
        },
    //     {
    //         path: '/',
    //         component: Layout2,
    //         children: [{
    //             path: '',
    //             redirect: 'painel'
    //         },
            // {
    //             path: '404',
    //             component: () => import('@/page/Error404')
    //         },
    //         {
    //             path: 'painel',
    //             component: () => import('@/page/Home')
    //         }, {
    //         path: '*',
    //         redirect: 'login'
    //         }]
    //     },
    ],
})

router.beforeEach((to, from, next) => {
    console.log('ENTROU')
	const token = auth.getToken();
    console.log('token', token);
	if (!['/login', '/register'].includes(to.path) && !token) {
		setTimeout(() => next('/login'), 10)
	} else if (to.path === '/login' && token) {
		setTimeout(() => next('/'), 10)
	} else {
		setTimeout(() => next(), 10)
	}
})

export default router;
