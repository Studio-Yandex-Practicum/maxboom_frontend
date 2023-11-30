import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите имя')
    .min(1, 'Минимальная длина имена 1 символ')
    .max(32, 'Максимальная длина имени 32 символа'),
  phoneNumber: Yup.string()
    .required('Введите номер телефона')
    .matches(/^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Укажите корректный номер телефона'),
  comment: Yup.string().max(255, 'Максимальная длина комментария 255 символов')
})
