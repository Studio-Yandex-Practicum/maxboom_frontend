import * as Yup from 'yup'

export const changeEmailFormScheme = Yup.object().shape({
  new_email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  current_password: Yup.string().required('Введите текущий пароль')
})
