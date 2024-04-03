import { FormikErrors } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import { UNSECCEED_SUBMIT_MESSAGE } from '../constants/constants'
import type { IFeedbackFormValues } from '../types/types'

/**
 * Функция определяет есть ли в данный момент ошибка валидации полей формы
 *
 * @param  {FormikErrors<IFeedbackFormValues>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {boolean} true, если хоть одно поле с ошибкой и оно трогалось
 */
export const hasErrors = (errors: FormikErrors<IFeedbackFormValues>, touched: { [key: string]: boolean }) => {
  return (
    (errors.text && touched.text) ||
    (errors.author_email && touched.author_email) ||
    (errors.author_name && touched.author_name) ||
    (errors.delivery_speed_score && touched.delivery_speed_score) ||
    (errors.price_score && touched.price_score) ||
    (errors.quality_score && touched.quality_score)
  )
}

/**
 * Функция получения строки ошибки из объекта ошибок Formik
 *
 * @param {FormikErrors<IFeedbackFormValues>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {string} строка с ошибкой валидации любого из полей формы
 */
export const getErrorText = (
  errors: FormikErrors<IFeedbackFormValues>,
  touched: { [key: string]: boolean }
) => {
  if (errors.text && touched.text) return errors.text
  if (errors.author_email && touched.author_email) return errors.author_email
  if (errors.author_name && touched.author_name) return errors.author_name
  if (errors.delivery_speed_score && touched.delivery_speed_score) return errors.delivery_speed_score
  if (errors.price_score && touched.price_score) return errors.price_score
  if (errors.quality_score && touched.quality_score) return errors.quality_score

  return 'Ошибка'
}

/**
 * Функция получения текста ошибки при выполнении запроса
 *
 * @param {ApiErrorTypes | string[]} error Ошибка в формате ApiErrorTypes | string[]
 * @returns {string} Ошибка в фромате string
 */
export const getQueryErrorText = (error: ApiErrorTypes | string[] | null): string => {
  return Array.isArray(error) ? error.join('') : typeof error === 'string' ? error : UNSECCEED_SUBMIT_MESSAGE
}
