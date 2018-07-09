import * as types from './mutation-types';

export default {
    [types.CURRENT_LANG](state, payload) {
        window.Cookies.set('locale', payload);
        state.currentLang = payload;
    },
    [types.LOGIN](state, payload) {
        window.Cookies.set('token', payload.token);
        window.axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;

        state.logged = true;
        state.token = payload.token;
    },
    [types.LOGOUT](state) {
        window.Cookies.remove('token');
        window.axios.defaults.headers.common.Authorization = '';

        state.logged = false;
        state.token = null;
    },
    [types.CURRENT_USER_ID](state, payload) {
        state.currentUserId = payload;
    },
    [types.CURRENT_USER_ROLE_ID](state, payload) {
        state.currentUserRoleId = payload;
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
};
