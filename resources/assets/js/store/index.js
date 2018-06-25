import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/auth';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    /**
     * Assign the modules to the store.
     */
    modules: {
        home,
        user,
    },
});