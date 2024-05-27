import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите имя')
    .min(2, 'Минимальная длина имени 6 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  surname: Yup.string()
    .required('Введите фамилию')
    .min(1, 'Минимальная длина фамилии 1 символ')
    .max(64, 'Максимальная длина фамилии 64 символа'),
  email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  tel: Yup.string()
    .required('Введите номер телефона')
    .matches(/^\+7\d{10}$/, 'Номер телефона должен быть в формате +7XXXXXXXXXX (X - цифра)'),
  country: Yup.string(),
  region: Yup.string(),
  index: Yup.number()
    .min(6, 'Количество символов должно быть 6')
    .max(6, 'Количество символов должно быть 6')
    .typeError('Индекс указывается только цифрами'),
  city: Yup.string(),
  password: Yup.string().required('Введите пароль'),
  passwordConfirmation: Yup.string()
    .required('Введите подтверждение пароля')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
})
