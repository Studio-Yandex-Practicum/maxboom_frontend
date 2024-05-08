import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  recipientName: Yup.string()
    .required('Введите имя получателя')
    .min(2, 'Минимальная длина имени 2 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  recipientEmail: Yup.string()
    .required('Введите электронную почту получателя')
    .email('Укажите корректный адрес электронной почты'),
  name: Yup.string()
    .required('Введите имя')
    .min(2, 'Минимальная длина имени 6 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  message: Yup.string()
    .min(10, 'Длина текста должна быть от 10 символов')
    .max(300, 'Длина текста должна быть до 300 символов'),
  sum: Yup.number()
    .required('Введите сумму')
    .min(1, 'Сумма должна быть не менее 1 руб')
    .max(1000, 'Сумма должна быть не более 1000 руб')
    .typeError('Сумма указывается только цифрами'),
  radio: Yup.string().required('Выберите тему подарочного сертификата'),
  checkbox: Yup.string().required('Подтвердите уведомление')
})
