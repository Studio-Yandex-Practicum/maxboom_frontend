import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Введите электронную почту').email('Укажите корректный адрес электронной почты'),
  password: Yup.string()
    .required('Введите пароль')
    .min(3, 'Минимальная длина пароля 8 символов')
    .max(64, 'Максимальная длина пароля 64 символа')
})
