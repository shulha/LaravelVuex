export default {
    async register(params) {
        const json = await window.axios.post('/api/v1/register', params);

        return json;
    }
};