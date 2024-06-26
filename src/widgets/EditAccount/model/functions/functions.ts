import { FormikErrors } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import { UNSECCEED_SUBMIT_MESSAGE } from '../constants/constants'
import { IUserprofile } from '../scheme/editAccountFormSliceScheme'

/**
 * Функция определяет есть ли в данный момент ошибка валидации полей формы
 *
 * @param  {FormikErrors<IUserprofile>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {boolean} true, если хоть одно поле с ошибкой и оно трогалось
 */
export const hasErrors = (errors: FormikErrors<IUserprofile>, touched: { [key: string]: boolean }) => {
  return (
    (errors.about && touched.about) ||
    (errors.company && touched.company) ||
    (errors.first_name && touched.first_name) ||
    (errors.last_name && touched.last_name)
  )
}

/**
 * Функция получения строки ошибки из объекта ошибок Formik
 *
 * @param {FormikErrors<IUserprofile>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {string} строка с ошибкой валидации любого из полей формы
 */
export const getErrorText = (errors: FormikErrors<IUserprofile>, touched: { [key: string]: boolean }) => {
  if (errors.about && touched.about) return errors.about
  if (errors.company && touched.company) return errors.company
  if (errors.first_name && touched.first_name) return errors.first_name
  if (errors.last_name && touched.last_name) return errors.last_name

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
