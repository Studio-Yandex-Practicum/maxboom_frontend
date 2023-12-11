import axios from 'axios'
import { ApiErrorTypes } from './types'

export const apiErrorIdentify = (e: unknown, message?: string) =>
  (axios.isAxiosError(e)
    ? e.response?.data && typeof e.response.data === 'object' && Object.hasOwn(e.response.data, 'non_field_errors')
    : message) || ApiErrorTypes.UNKNOWN_SERVER_ERROR
