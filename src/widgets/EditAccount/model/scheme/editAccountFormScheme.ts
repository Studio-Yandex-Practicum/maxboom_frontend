import * as Yup from 'yup'

import {
  FAMILYNAME_LENGTH_MAX_LIMIT,
  FAMILYNAME_LENGTH_MIN_LIMIT,
  NAME_LENGTH_MAX_LIMIT,
  NAME_LENGTH_MIN_LIMIT,
  NAME_PATRONIMIC_LENGTH_MAX_LIMIT,
  NAME_PATRONIMIC_LENGTH_MIN_LIMIT,
  PHONE_REG_EXP
} from '@/shared/constants/constants'

export const editAccountFormScheme = Yup.object().shape({
  email: Yup.string().required('Задан некорректный формат email').email('Задан некорректный формат email'),
  phone: Yup.string()
    .required('Задан некорректный формат номера телефона')
    .matches(PHONE_REG_EXP, 'Задан некорректный формат номера телефона'),
  name: Yup.string()
    .min(
      NAME_PATRONIMIC_LENGTH_MIN_LIMIT,
      `Имя должно быть от ${NAME_PATRONIMIC_LENGTH_MIN_LIMIT} до ${NAME_PATRONIMIC_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      NAME_PATRONIMIC_LENGTH_MAX_LIMIT,
      `Имя должно быть от ${NAME_PATRONIMIC_LENGTH_MIN_LIMIT} до ${NAME_PATRONIMIC_LENGTH_MAX_LIMIT} символов!`
    )
    .required(`Имя должно быть от ${NAME_LENGTH_MIN_LIMIT} до ${NAME_LENGTH_MAX_LIMIT} символов!`),
  familyName: Yup.string()
    .min(
      FAMILYNAME_LENGTH_MIN_LIMIT,
      `Текст отзыва должен быть от ${FAMILYNAME_LENGTH_MIN_LIMIT} до ${FAMILYNAME_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      FAMILYNAME_LENGTH_MAX_LIMIT,
      `Текст отзыва должен быть от ${FAMILYNAME_LENGTH_MIN_LIMIT} до ${FAMILYNAME_LENGTH_MAX_LIMIT} символов!`
    )
    .required(
      `Текст отзыва должен быть от ${FAMILYNAME_LENGTH_MIN_LIMIT} до ${FAMILYNAME_LENGTH_MAX_LIMIT} символов!`
    )
})
