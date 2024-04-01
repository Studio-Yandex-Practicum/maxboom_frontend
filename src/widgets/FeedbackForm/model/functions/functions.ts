import { FormikErrors } from 'formik'

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
 * @returns {string} строка с ошибкой валидации любого из полей формы
 */
export const getErrorText = (errors: FormikErrors<IFeedbackFormValues>) => {
  return (
    errors.text ||
    errors.author_email ||
    errors.author_name ||
    errors.delivery_speed_score ||
    errors.price_score ||
    errors.quality_score ||
    'Ошибка'
  )
}
