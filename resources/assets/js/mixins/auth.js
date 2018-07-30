export default {
    watch: {
        lang (val) {
            this.$i18n.locale = val;
            this.$nextTick(() => {
                this.$validator.locale = val;
            });
        },
    },
    mounted() {
        this.$i18n.locale = this.$store.getters.currentLang;
    },
    methods: {
        async logout() {
            await this.$store.dispatch('logout');

            this.$router.push({
                name: 'auth.login',
            });
        },
    },
};
