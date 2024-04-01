import { FormikHelpers } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import type { IFeedbackFormValues } from '../types/types'

export interface IFeedbackFormSchema {
  isLoading: boolean
  isSuccess: boolean
  error: string[] | ApiErrorTypes | null
}

export interface IFeedbackFormData {
  values: IFeedbackFormValues
  formikHelpers: FormikHelpers<IFeedbackFormValues>
}
