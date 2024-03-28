import * as Yup from 'yup'

import {
  FEEDBACK_LENGTH_MAX_LIMIT,
  FEEDBACK_LENGTH_MIN_LIMIT,
  NAME_LENGTH_MAX_LIMIT,
  NAME_LENGTH_MIN_LIMIT
} from '@/shared/constants/constants'

export const feedbackFormScheme = Yup.object().shape({
  author_email: Yup.string().email('Задан некорректный формат email'),
  author_name: Yup.string()
    .min(
      NAME_LENGTH_MIN_LIMIT,
      `Имя должно быть от ${NAME_LENGTH_MIN_LIMIT} до ${NAME_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      NAME_LENGTH_MAX_LIMIT,
      `Имя должно быть от ${NAME_LENGTH_MIN_LIMIT} до ${NAME_LENGTH_MAX_LIMIT} символов!`
    )
    .required(`Имя должно быть от ${NAME_LENGTH_MIN_LIMIT} до ${NAME_LENGTH_MAX_LIMIT} символов!`),
  text: Yup.string()
    .min(
      FEEDBACK_LENGTH_MIN_LIMIT,
      `Текст отзыва должен быть от ${FEEDBACK_LENGTH_MIN_LIMIT} до ${FEEDBACK_LENGTH_MAX_LIMIT} символов!`
    )
    .max(
      FEEDBACK_LENGTH_MAX_LIMIT,
      `Текст отзыва должен быть от ${FEEDBACK_LENGTH_MIN_LIMIT} до ${FEEDBACK_LENGTH_MAX_LIMIT} символов!`
    )
    .required(
      `Текст отзыва должен быть от ${FEEDBACK_LENGTH_MIN_LIMIT} до ${FEEDBACK_LENGTH_MAX_LIMIT} символов!`
    ),
  delivery_speed_score: Yup.string().required('Пожалуйста, выберите оценку!'),
  price_score: Yup.string().required('Пожалуйста, выберите оценку!'),
  quality_score: Yup.string().required('Пожалуйста, выберите оценку!')
})
