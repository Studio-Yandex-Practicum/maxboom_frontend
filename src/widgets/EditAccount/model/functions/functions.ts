import { FormikErrors } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import { UNSECCEED_SUBMIT_MESSAGE } from '../constants/constants'
import type { IEditAccountFormValues } from '../types/types'

/**
 * Функция определяет есть ли в данный момент ошибка валидации полей формы
 *
 * @param  {FormikErrors<IEditAccountFormValues>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {boolean} true, если хоть одно поле с ошибкой и оно трогалось
 */
export const hasErrors = (
  errors: FormikErrors<IEditAccountFormValues>,
  touched: { [key: string]: boolean }
) => {
  return (
    (errors.phone && touched.phone) ||
    (errors.email && touched.email) ||
    (errors.name && touched.name) ||
    (errors.familyName && touched.familyName)
  )
}

/**
 * Функция получения строки ошибки из объекта ошибок Formik
 *
 * @param {FormikErrors<IEditAccountFormValues>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {string} строка с ошибкой валидации любого из полей формы
 */
export const getErrorText = (
  errors: FormikErrors<IEditAccountFormValues>,
  touched: { [key: string]: boolean }
) => {
  if (errors.phone && touched.phone) return errors.phone
  if (errors.email && touched.email) return errors.email
  if (errors.name && touched.name) return errors.name
  if (errors.familyName && touched.familyName) return errors.familyName

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
