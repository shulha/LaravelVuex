export default {
    async getUserCurrent() {
        const json = await window.axios.get('/api/v1/user/current');

        return json;
    }
};
