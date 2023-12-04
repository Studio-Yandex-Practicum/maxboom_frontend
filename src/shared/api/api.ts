import axios from 'axios'

export const $api = axios.create({
  baseURL: __API__
})
console.log('__API__', __API__)
