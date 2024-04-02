import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите имя')
    .min(6, 'Минимальная длина имени 6 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  textarea: Yup.string()
    .required('Введите текст сообщения')
    .min(10, 'Длина текста должна быть от 10 символов')
    .max(300, 'Длина текста должна быть до 300 символов')
})
