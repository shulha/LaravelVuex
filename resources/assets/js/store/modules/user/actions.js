import user from '../../../api/user';

export const register = async ({ commit }, payload) => {
    const json = await user.register(payload);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const login = async ({ commit }, payload) => {
  const json = await user.login(payload);

  if (json.status === 200) {
      // commit();
  }
};

export default {
    register,
};
