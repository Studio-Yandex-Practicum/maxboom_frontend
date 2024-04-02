import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Введите электронную почту')
    .email('Укажите корректный адрес электронной почты'),
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Минимальная длина пароля 6 символов') // поменял для тестового юзера
    .max(64, 'Максимальная длина пароля 64 символа'),
  name: Yup.string()
    .required('Введите имя')
    .min(6, 'Минимальная длина имени 6 символов')
    .max(64, 'Максимальная длина имени 64 символа'),
  surname: Yup.string()
    .required('Введите фамилию')
    .min(1, 'Минимальная длина фамилии 1 символ')
    .max(64, 'Максимальная длина фамилии 64 символа'),
  tel: Yup.string()
    .required('Введите номер телефона')
    .matches(/^\+7\d{10}$/, 'Номер телефона должен быть в формате +7XXXXXXXXXX (X - цифра)'),
  numberOrder: Yup.string().required('Введите номер заказа'),
  dateOrder: Yup.string().required('Введите дату заказа'),
  itemInfo: Yup.string().required('Введите наименование товара'),
  model: Yup.string().required('Введите название модели')
})
