import Vue from 'vue';
import VeeValidate from 'vee-validate';
import store from '../store';

import validationRu from '../lang/ru/validator.js';
import validationEn from '../lang/en/validator.js';

Vue.use(VeeValidate, {
    fieldsBagName: 'fieldsValidation',
    locale: store.getters.currentLang,
    dictionary: {
        ru: validationRu,
        en: validationEn,
    },
});
