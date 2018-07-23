import auth from '../../../api/auth';

import * as types from './mutation-types';

export const register = async ({ dispatch, commit }, payload) => {
    const json = await auth.register(payload);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const getUserCurrent = async ({ commit }) => {
    const json = await auth.getUserCurrent();

    if (json.status === 200) {
        commit(types.CURRENT_USER_ID, json.data.id);
        commit(types.CURRENT_USER_ROLE_ID, json.data.role_id);
        commit(types.CURRENT_USER_SURNAME, json.data.surname);
        commit(types.CURRENT_USER_NAME, json.data.name);
        commit(types.CURRENT_USER_MIDDLE_NAME, json.data.middle_name);
        commit(types.CURRENT_USER_EMAIL, json.data.email);
        return json;
    }

    throw json;
};

export const emailConfirmation = async (context, payload) => {
    const json = await auth.emailConfirmation(payload);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const login = async ({ dispatch, commit }, payload) => {
    const json = await auth.login(payload);

    if (json.status === 200) {
        commit(types.LOGIN, json.data);
        await dispatch('getUserCurrent');
        return json;
    }

    throw json;
};

export const logout = async ({ commit }) => {
    commit(types.CURRENT_USER_ID, null);
    commit(types.CURRENT_USER_ROLE_ID, null);
    commit(types.CURRENT_USER_SURNAME, null);
    commit(types.CURRENT_USER_NAME, null);
    commit(types.CURRENT_USER_MIDDLE_NAME, null);
    commit(types.CURRENT_USER_EMAIL, null);
    commit(types.LOGOUT);
};

export const checkLogged = async ({ dispatch, commit }) => {
    const token = window.Cookies.get('token');

    if (token !== undefined) {
        commit(types.LOGIN, {
            token,
        });

        await dispatch('getUserCurrent');
    }
};

export default {
    register,
    getUserCurrent,
    emailConfirmation,
    login,
    logout,
    checkLogged,
};
