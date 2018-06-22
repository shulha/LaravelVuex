import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import store from '../store';

import validationRu from '../lang/ru/validator.js';
import validationEn from '../lang/en/validator.js';

Validator.extend('unique', {
    async validate(value) {
        return {
            valid: value !== 0,
        };
    },
    getMessage: validationEn.messages.unique,
});

Vue.use(VeeValidate, {
    fieldsBagName: 'fieldsValidation',
    locale: store.getters.currentLang,
    dictionary: {
        ru: validationRu,
        en: validationEn,
    },
});
