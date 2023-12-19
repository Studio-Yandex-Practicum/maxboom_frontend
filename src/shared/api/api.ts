import axios, { AxiosInstance } from 'axios'

export interface ApiInstance extends AxiosInstance {
  delToken: () => void
  addToken: (token: string) => void
}

export const $api: ApiInstance = Object.create(
  axios.create({
    baseURL: __API__,
    withCredentials: false
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
// $api.interceptors.request.use(value => {
//   const token = tokenFromStorageGet()
//   if (token) {
//     value.headers!.authorization = `token ${token}`
//   } else {
//     delete value.headers!.authorization
//   }
//   return value
// })
