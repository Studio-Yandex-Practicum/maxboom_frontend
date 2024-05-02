import * as Yup from 'yup'

import { EMAIL_VALIDATION_ERROR } from '../constants/constants'

export const validationSchema = Yup.object().shape({
  email: Yup.string().required(EMAIL_VALIDATION_ERROR).email(EMAIL_VALIDATION_ERROR)
})
