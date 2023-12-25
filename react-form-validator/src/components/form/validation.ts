import * as Yup from 'yup';
import MONTHS from '../../config/months';

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(40, 'Слишком длинное имя')
        .required('Обязательное поле'),
    lastName: Yup.string()
        .min(1, 'Слишком короткая фамилия')
        .max(40, 'Слишком длинная фамилия')
        .required('Обязательное поле'),
    birthDay: Yup.number()
        .min(1, 'Недопустимый день')
        .max(31, 'Недопустимый день')
        .required('Обязательное поле'),
    birthMonth: Yup.string()
        .oneOf(MONTHS, 'Недопустимый месяц')
        .required('Обязательное поле'),
    birthYear: Yup.number()
        .max(new Date().getFullYear(), 'Недопустимый год')
        .required('Обязательное поле'),
    cardNumber: Yup.string()
        .matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/, 'Недопустимый номер карты')
        .required('Обязательное поле'),
    cvv: Yup.string()
        .matches(/^[0-9]{3}$/, 'Недопустимый CVV')
        .required('Обязательное поле'),
    phoneNumber: Yup.string()
        .matches(/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Недопустимый номер телефона')
        .required('Обязательное поле'),
    email: Yup.string()
        .email('Недопустимый адрес электронной почты')
        .required('Обязательное поле'),
});
