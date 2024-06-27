import * as Yup from 'yup'

export const changePasswordFormScheme = Yup.object().shape({
  current_password: Yup.string().required('Введите текущий пароль'),
  new_password: Yup.string().required('Введите новый пароль'),
  new_passwordConfirmation: Yup.string()
    .required('Введите подтверждение нового пароля')
    .oneOf([Yup.ref('new_password')], 'Пароли должны совпадать')
})
