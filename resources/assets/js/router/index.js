import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import Home from '../pages/Home.vue';
import Profile from '../pages/auth/Profile.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import EmailConfirmed from '../pages/auth/EmailConfirmed.vue';
import EmailConfirmation from '../pages/auth/EmailConfirmation.vue';

import NotFound from '../pages/NotFound.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'auth.profile',
        component: Profile,
        meta: {
            auth: true,
        },
    },
    {
        path: '/login',
        name: 'auth.login',
        component: Login,
        meta: {
            guest: true,
        },
    },
    {
        path: '/register',
        name: 'auth.register',
        component: Register,
        meta: {
            guest: true,
        },
    },
    {
        path: '/email/confirmation',
        name: 'email.confirmation',
        component: EmailConfirmation,
        meta: {
            guest: true,
        },
    },
    {
        path: '/email/confirmation/:token',
        name: 'email.confirmed',
        component: EmailConfirmed,
        meta: {
            guest: true,
        },
    },
    {
        path: '*',
        component: NotFound,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    saveScrollPosition: false,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth) && !store.getters['logged']) {
        /**
         * If the user is not authenticated and visits
         * a page that requires authentication, redirect to the login page
         */
        next({
            name: 'auth.login',
            query: {
                redirect: to.fullPath,
            },
        });
    } else if (to.matched.some(record => record.meta.guest) && store.getters['logged']) {
        /**
         * If the user is authenticated and visits
         * an guest page, redirect to the homepage
         */
        next({
            name: 'home',
        });
    } else {
        next();
    }
});

sync(store, router);

export default router;