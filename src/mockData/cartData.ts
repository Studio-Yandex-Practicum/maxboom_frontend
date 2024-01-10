import { TProduct } from './productsData'

// позже отправится в Redux
export type TCartItem = {
  article: string
  quantity: number
}
export type TCartItemExt = TCartItem & TProduct

export type TCart = {
  products: TCartItem[]
  weight: number
  unit: string
}

export const cartData: TCart = {
  products: [
    {
      article: '1229239191',
      quantity: 4
    },
    {
      article: '1229239192',
      quantity: 2
    },
    {
      article: '1229239193',
      quantity: 1
    }
  ],

  weight: 30,
  unit: 'кг'
}
