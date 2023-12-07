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
