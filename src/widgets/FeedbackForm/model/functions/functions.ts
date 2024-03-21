import { FormikErrors } from 'formik'

import { IFeedbackFormValues } from '../types/types'

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
    (errors.email && touched.email) ||
    (errors.username && touched.username) ||
    (errors.deliverySpeedScore && touched.deliverySpeedScore) ||
    (errors.priceScore && touched.priceScore) ||
    (errors.qualityScore && touched.qualityScore)
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
    errors.email ||
    errors.username ||
    errors.deliverySpeedScore ||
    errors.priceScore ||
    errors.qualityScore ||
    'Ошибка'
  )
}
