export enum ApiRoutes {
  LOGIN = 'token/login',
  LOGOUT = 'token/logout',
  BRANDS = 'catalogue/brand',
  SEARCH = 'search',
  STORE_REVIEWS = 'store-reviews',
  CATEGORIES = 'catalogue/category',
  CATEGORIES_ON_MAIN = 'catalogue/category/?is_visible_on_main=true',
  SHOP_NEWS = 'shopnews',
  BLOG_POSTS = 'shopblog/posts',
  CORE_BASE = 'core/base',
  STORIES = 'stories',
  PRODUCT = 'catalogue',
  CART_LIST = 'cart'
}

export enum ApiErrorTypes {
  UNKNOWN_SERVER_ERROR = 'Неизвестная ошибка сервера',
  AUTH_ERROR = 'Ошибка авторизации',
  DATA_EMPTY_ERROR = 'Ошибка получения данных'
}

export interface ApiError {
  [SERVER_ERROR_FIELD]?: string[]
}

export type ApiErrorType = ApiError | ApiErrorTypes

export const SERVER_ERROR_FIELD = 'non_field_errors'
