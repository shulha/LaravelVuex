import * as types from '../store/modules/user/mutation-types';

export default {
    computed: {
        lang: {
            get() {
                return this.$store.getters.currentLang;
            },
            set(value) {
               this.$store.commit(types.CURRENT_LANG, value);
            },
        },
    },
};
