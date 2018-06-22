import * as types from './mutation-types';

export default {
    [types.CURRENT_LANG](state, payload) {
        state.currentLang = payload;
    },
    [types.CURRENT_USER_SURNAME](state, payload) {
        state.currentUserSurname = payload;
    },
    [types.CURRENT_USER_NAME](state, payload) {
        state.currentUserName = payload;
    },
    [types.CURRENT_USER_MIDDLE_NAME](state, payload) {
        state.currentUserMiddleName = payload;
    },
    [types.CURRENT_USER_EMAIL](state, payload) {
        state.currentUserEmail = payload;
    },
    [types.CURRENT_USER_PASSWORD](state, payload) {
        state.currentUserPassword = payload;
    },
    [types.CURRENT_USER_PASSWORD_CONFIRMATION](state, payload) {
        state.currentUserPasswordConfirmation = payload;
    },
    // [types.LOGIN](state, payload) {
    //     state.auth
    // },
};
