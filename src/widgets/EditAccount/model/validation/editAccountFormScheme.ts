import * as Yup from 'yup'

import {
  ABOUT_LENGTH_MAX_LIMIT,
  FAMILYNAME_LENGTH_MAX_LIMIT,
  FAMILYNAME_LENGTH_MIN_LIMIT,
  NAME_PATRONIMIC_LENGTH_MAX_LIMIT,
  NAME_PATRONIMIC_LENGTH_MIN_LIMIT
} from '@/shared/constants/constants'

export const editAccountFormScheme = Yup.object().shape({
  about: Yup.string().max(
    ABOUT_LENGTH_MAX_LIMIT,
    `Длина поля должна быть не более ${ABOUT_LENGTH_MAX_LIMIT} символов!`
  ),
  first_name: Yup.string()
    .min(
      NAME_PATRONIMIC_LENGTH_MIN_LIMIT,
      `Имя должно быть от ${NAME_PATRONIMIC_LENGTH_MIN_LIMIT} до ${NAME_PATRONIMIC_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      NAME_PATRONIMIC_LENGTH_MAX_LIMIT,
      `Имя должно быть от ${NAME_PATRONIMIC_LENGTH_MIN_LIMIT} до ${NAME_PATRONIMIC_LENGTH_MAX_LIMIT} символов!`
    ),
  last_name: Yup.string()
    .min(
      FAMILYNAME_LENGTH_MIN_LIMIT,
      `Фамилия должна быть от ${FAMILYNAME_LENGTH_MIN_LIMIT} до ${FAMILYNAME_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      FAMILYNAME_LENGTH_MAX_LIMIT,
      `Фамилия должна быть от ${FAMILYNAME_LENGTH_MIN_LIMIT} до ${FAMILYNAME_LENGTH_MAX_LIMIT} символов!`
    ),
  company: Yup.string().max(
    ABOUT_LENGTH_MAX_LIMIT,
    `Длина поля должна быть не более ${ABOUT_LENGTH_MAX_LIMIT} символов!`
  )
})
