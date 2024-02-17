import axios from 'axios'

import { ApiErrorTypes, SERVER_ERROR_FIELD } from './types'

export const apiErrorIdentify = (e: unknown, message?: ApiErrorTypes) =>
  (axios.isAxiosError(e)
    ? e.response?.data &&
      typeof e.response.data === 'object' &&
      Object.hasOwn(e.response.data, SERVER_ERROR_FIELD) &&
      e.response.data
    : (e instanceof Error && e.message) || message) || ApiErrorTypes.UNKNOWN_SERVER_ERROR
