export default {
    async register(params) {
        const json = await window.axios.post('/api/v1/register', params);

        return json;
    },
    async emailConfirmation(params) {
        const json = await window.axios.post('/api/v1/email/confirmation', params);

        return json;
    },
    async login(params) {
        const json = await window.axios.post('/api/v1/login', params);

        return json;
    },
    async getUserCurrent() {
        const json = await window.axios.get('/api/v1/user/current');

        return json;
    },
};