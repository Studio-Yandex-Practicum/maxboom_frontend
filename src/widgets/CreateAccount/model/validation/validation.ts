import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Минимальная длина имени 6 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  surname: Yup.string()
    .min(1, 'Минимальная длина фамилии 1 символ')
    .max(64, 'Максимальная длина фамилии 64 символа'),
  email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  tel: Yup.string().matches(/^\+7\d{10}$/, 'Номер телефона должен быть в формате +7XXXXXXXXXX (X - цифра)'),
  country: Yup.string(),
  region: Yup.string(),
  index: Yup.string().matches(/^[0-9]{6}$/, 'Индекс должен быть в формате XXXXXX (X - цифра)'),
  city: Yup.string(),
  password: Yup.string().required('Введите пароль'),
  passwordConfirmation: Yup.string()
    .required('Введите подтверждение пароля')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
  agreement: Yup.bool().oneOf([true], 'Необходимо ознакомиться с политикой безопасности.')
})
