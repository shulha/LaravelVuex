/**
 * Will initialize the application.
 */

import Vue from 'vue';

/**
 * Import and bootstrap the plugins.
 */

import './bootstrap';
import router from './router';
import store from './store';
import i18n from './plugins/lang';

/**
 * Main App.
 *
 * Last but not least, we import the main application.
 */

import App from './pages/App.vue';

new Vue({
    router,
    store,
    i18n,
    el: '#app',
    template: '<App/>',
    components: { App },
});