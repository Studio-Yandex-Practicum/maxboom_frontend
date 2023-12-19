import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/constants/localStorage'

export const LOCAL_STORAGE_ACCESS_ERROR = 'Ошибка доступа к localStorage'

/**
 * набор методов для получения/удаления/добавления информации в localStorage
 * создан для обработки исключения при заблокированном localStorage
 */
export const $localStorageHandler = {
  getItem(key: string) {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      if (__IS_DEV__) console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
    }
  },
  setItem(key: string, value: string) {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      if (__IS_DEV__) console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
    }
  },
  removeItem(key: string) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      if (__IS_DEV__) console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
    }
  }
}

export const tokenFromStorageGet = () => $localStorageHandler.getItem(LOCAL_STORAGE_TOKEN_KEY)
