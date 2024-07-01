import { FormikErrors } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import { UNSECCEED_SUBMIT_MESSAGE } from '../constants/constants'
import { IChangeEmailForm } from '../scheme/changeEmailFormSliceScheme'

/**
 * Функция определяет есть ли в данный момент ошибка валидации полей формы
 *
 * @param  {FormikErrors<IChangeEmailForm>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {boolean} true, если хоть одно поле с ошибкой и оно трогалось
 */
export const hasErrors = (errors: FormikErrors<IChangeEmailForm>, touched: { [key: string]: boolean }) => {
  return (errors.current_password && touched.current_password) || (errors.new_email && touched.new_email)
}

/**
 * Функция получения строки ошибки из объекта ошибок Formik
 *
 * @param {FormikErrors<IChangeEmailForm>} errors ошибки валидации полей формы
 * @param touched объект с состояниями полей, true если поле было тронуто пользователем
 * @returns {string} строка с ошибкой валидации любого из полей формы
 */
export const getErrorText = (errors: FormikErrors<IChangeEmailForm>, touched: { [key: string]: boolean }) => {
  if (errors.current_password && touched.current_password) return errors.current_password
  if (errors.new_email && touched.new_email) return errors.new_email

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
