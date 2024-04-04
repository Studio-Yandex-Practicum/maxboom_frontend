export interface ICartSchema {
  isLoading?: boolean
  error?: string | string[] | null
  cart: ICart
}

export interface ICart {
  id: number
  products: ICartProduct[]
  user: number
  cart_full_price: number
}

export interface ICartProduct {
  name: string
  image: 'string'
  price: number
  amount: number
  full_price: number
}

export interface IAddedProduct {
  product: number
  cart: number
  amount: number
}
