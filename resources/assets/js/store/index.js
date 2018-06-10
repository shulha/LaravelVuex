import Vue from 'vue';
import Vuex from 'vuex';

import home from './home';

Vue.use(Vuex);

export default new Vuex.Store({
    /**
     * Assign the modules to the store.
     */
    modules: {
        home,
    },

    /**
     * If strict mode should be enabled.
     */
    strict: debug,
});