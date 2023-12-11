export enum ApiErrorTypes {
  UNKNOWN_SERVER_ERROR = 'Неизвестная ошибка сервера',
  AUTH_ERROR = 'Ошибка авторизации',
  DATA_EMPTY_ERROR = 'Ошибка получения данных'
}

export interface ApiError {
  non_field_errors?: string
}

export type ApiErrorType = ApiError | ApiErrorTypes
