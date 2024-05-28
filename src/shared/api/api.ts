import axios, { AxiosInstance } from 'axios'

import { Routes } from '../config/routerConfig/routes'
import { LOCAL_STORAGE_TOKEN_KEY } from '../constants/localStorage'
import { $localStorageHandler } from '../libs/helpers/localStorageHandler'

export interface ApiInstance extends AxiosInstance {
  delToken?: () => void
  addToken?: (token: string) => void
}

export const $api: ApiInstance = axios.create({
  withCredentials: true,
  baseURL: __API__
})

$api.addToken = function (token: string) {
  this.defaults.headers.common.authorization = `token ${token}`
}

$api.delToken = function () {
  delete this.defaults.headers.common.authorization
}

$api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      delete $api.defaults.headers.common.authorization
      $localStorageHandler.removeItem(LOCAL_STORAGE_TOKEN_KEY)

      if (window.location.pathname !== Routes.LOGIN) {
        window.location.href = Routes.LOGIN
      }
    }
    return Promise.reject(error)
  }
)
