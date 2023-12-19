import { ApiErrorType, ApiErrorTypes, SERVER_ERROR_FIELD } from './types'

export const rejectedPayloadHandle = (payload: ApiErrorType | undefined) =>
  (typeof payload === 'object' ? payload[SERVER_ERROR_FIELD] : payload) || ApiErrorTypes.UNKNOWN_SERVER_ERROR
