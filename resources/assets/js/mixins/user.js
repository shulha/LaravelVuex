import * as types from '../store/modules/user/mutation-types';

export default {
    computed: {
        logged: {
            get() {
                return this.$store.getters.logged;
            },
            set() {
                this.$store.commit(types.LOGIN);
            },
        },
        lang: {
            get() {
                return this.$store.getters.currentLang;
            },
            set(value) {
               this.$store.commit(types.CURRENT_LANG, value);
            },
        },
        surname: {
            get() {
                return this.$store.getters.currentUserSurname;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_SURNAME, value);
            },
        },
        name: {
            get() {
                return this.$store.getters.currentUserName;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_NAME, value);
            },
        },
        middleName: {
            get() {
                return this.$store.getters.currentUserMiddleName;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_MIDDLE_NAME, value);
            },
        },
        email: {
            get() {
                return this.$store.getters.currentUserEmail;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_EMAIL, value);
            },
        },
        password: {
            get() {
                return this.$store.getters.currentUserPassword;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_PASSWORD, value);
            },
        },
        passwordConfirmation: {
            get() {
                return this.$store.getters.currentUserPasswordConfirmation;
            },
            set(value) {
               this.$store.commit(types.CURRENT_USER_PASSWORD_CONFIRMATION, value);
            },
        },
    },
};
