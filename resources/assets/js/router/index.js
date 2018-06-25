import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import EmailConfirmed from '../pages/auth/EmailConfirmed.vue';

import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'auth.login',
        component: Login,
    },
    {
        path: '/register',
        name: 'auth.register',
        component: Register,
    },
    {
        path: '/email/confirmation/:token',
        name: 'email.confirmed',
        component: EmailConfirmed,
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default new VueRouter({
    routes,
    mode: 'history',
    saveScrollPosition: false,
});