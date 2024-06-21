import { FormikHelpers } from 'formik'

import type { ApiErrorTypes } from '@/shared/api/types'

import type { IEditAccountFormValues } from '../types/types'

export interface IEditAccountFormSchema {
  isLoading: boolean
  isSuccess: boolean
  error: string[] | ApiErrorTypes | null
  userprofile: IUserprofile | null
}

export interface IUserprofile {
  email: string
  name: string
  phone: string
  familyName: string
  is_vendor: boolean
}

export interface IEditAccountFormData {
  values: IEditAccountFormValues
  formikHelpers: FormikHelpers<IEditAccountFormValues>
}
