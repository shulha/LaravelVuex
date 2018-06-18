import * as types from './mutation-types';

export default {
    [types.CURRENT_LANG](state, payload) {
        state.currentLang = payload;
    },
};
