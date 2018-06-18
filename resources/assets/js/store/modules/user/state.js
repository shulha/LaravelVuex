export default {
    currentLang: localStorage.getItem('locale') === null ? 'ru' : localStorage.getItem('locale'),
};
