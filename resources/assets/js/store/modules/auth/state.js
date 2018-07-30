export default {
    currentLang: window.Cookies.get('locale') || 'ru',
    logged: false,
    token: null,
    currentUserId: null,
    currentUserRoleId: null,
    currentUserSurname: '',
    currentUserName: '',
    currentUserMiddleName: '',
    currentUserEmail: '',
    currentUserPassword: '',
    currentUserPasswordConfirmation: '',
};
