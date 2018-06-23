import user from '../../../api/user';
import auth from '../../../api/auth';

import * as types from './mutation-types';

export const register = async ({ commit }, payload) => {
    const json = await auth.register(payload);

    if (json.status === 200) {
        commit(types.LOGIN, json.data);
        return json;
    }

    throw json;
};

export const getUserCurrent = async ({ commit }) => {
    const json = await user.getUserCurrent();

    commit(types.CURRENT_USER_ID, json.data.id);
    commit(types.CURRENT_USER_ROLE_ID, json.data.role_id);
    commit(types.CURRENT_USER_SURNAME, json.data.surname);
    commit(types.CURRENT_USER_NAME, json.data.name);
    commit(types.CURRENT_USER_MIDDLE_NAME, json.data.middle_name);
    commit(types.CURRENT_USER_EMAIL, json.data.email);
};

export default {
    register,
    getUserCurrent,
};
