import { TCategory } from '@/shared/model/types/CategoryModel'

export type TProduct = {
  name: string
  slug: string
  type: 'product'
  number: number
  image: string
  price: string
}

export type TResultData = {
  data: Array<TCategory | TProduct>
  success: boolean
}

export enum ECardView {
  GRID = 'grid',
  LIST = 'list',
  COMPACT = 'compact'
}

export type TOrder = {
  amount: number
  productsSum: number
  currency: string
  productsSumWithoutDiscount: number
  total: number
}
