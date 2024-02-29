import { TCategory } from '@/models/CategoryModel'

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

export enum ECheckboxSize {
  M = 'medium'
}

export enum ECheckboxTheme {
  PRIMARY = 'primary'
}

export type TOrder = {
  amount: number
  productsSum: number
  currency: string
  productsSumWithoutDiscount: number
  total: number
}

export type TFormReturn = {
  name: string
  surname: string
  email: string
  tel: string
  numberOrder: string
  dateOrder: string
  itemInfo: string
  model: string
  amount: string
  textArea: string
  myChoice: string
}
