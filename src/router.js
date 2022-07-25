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
    ],
})

router.beforeEach((to, from, next) => {
	const token = auth.getToken();
	if (!['/login', '/register'].includes(to.path) && !token) {
		setTimeout(() => next('/login'), 10)
	} else if (to.path === '/login' && token) {
		setTimeout(() => next('/'), 10)
	} else {
		setTimeout(() => next(), 10)
	}
})

export default router;
