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
  orderNumber: Yup.string().required('Введите номер заказа'),
  orderDate: Yup.string().required('Введите дату заказа'),
  itemName: Yup.string().required('Введите наименование товара'),
  model: Yup.string().required('Введите название модели'),
  quantity: Yup.number()
    .required('Введите количество')
    .min(1, 'Количество должно быть не менее 1')
    .typeError('Количество указывается только цифрами'),
  reasons: Yup.string().required('Выберите причину возврата'),
  textArea: Yup.string()
    .min(10, 'Длина текста должна быть от 10 символов')
    .max(300, 'Длина текста должна быть до 300 символов')
})
