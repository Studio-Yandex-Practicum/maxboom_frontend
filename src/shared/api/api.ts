import axios, { AxiosInstance } from 'axios'

export interface ApiInstance extends AxiosInstance {
  delToken: () => void
  addToken: (token: string) => void
}

export const $api: ApiInstance = Object.create(
  axios.create({
    withCredentials: true,
    baseURL: __API__
  }),
  {
    delToken: {
      value: function () {
        delete this.defaults.headers.common.authorization
      }
    },
    addToken: {
      value: function (token: string) {
        this.defaults.headers.common.authorization = `token ${token}`
      }
    }
  }
)
