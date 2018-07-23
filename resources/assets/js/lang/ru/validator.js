import messages from 'vee-validate/dist/locale/ru';

export default {
    messages: {
        ...messages.messages,
        unique() {
            return 'Эл. адрес уже существует';
        },
        notFound() {
            return 'Пользователь не найден';
        },
    },
    attributes: {
        name: 'Имя',
        email: 'Электронный адресс',
        password: 'Пароль',
        passwordConfirmation: 'Подтветдите пароль',
    },
};
