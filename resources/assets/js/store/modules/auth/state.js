export default {
    currentLang: localStorage.getItem('locale') === null ? 'ru' : localStorage.getItem('locale'),
    logged: false,
    token: null,
    currentUserId: null,
    currentUserRoleId: null,
    currentUserSurname: 'currentUserSurname',
    currentUserName: 'currentUserName',
    currentUserMiddleName: 'currentUserMiddleName',
    currentUserEmail: 'tkach.aleksandr.s@gmail.com',
    currentUserPassword: '12345678',
    currentUserPasswordConfirmation: '12345678',
};