import { ApiErrorType, ApiErrorTypes } from './types'

export const rejectedPayloadHandle = (payload: ApiErrorType | undefined) =>
  (typeof payload === 'object' ? payload.non_field_errors : payload) || ApiErrorTypes.UNKNOWN_SERVER_ERROR
