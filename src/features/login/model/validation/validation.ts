import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Введите электронную почту'),
  password: Yup.string().required('Введите пароль')
})
