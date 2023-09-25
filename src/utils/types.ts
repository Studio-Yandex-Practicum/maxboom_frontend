export type TCategory = {
  name: string
  url: string
  type: 'category'
}

export type TProduct = {
  name: string
  url: string
  type: 'product'
  number: number
  image: string
  price: string
}

export type TResultData = {
  data: Array<TCategory | TProduct>
  success: boolean
}
