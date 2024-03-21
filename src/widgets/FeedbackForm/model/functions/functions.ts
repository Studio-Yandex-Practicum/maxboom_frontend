import { FormikErrors } from 'formik'

import { IFeedbackFormValues } from '../types/types'

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
