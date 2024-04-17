export interface ICartEntitySchema {
  isLoading?: boolean
  error?: string | string[] | null
  cart: ICartEntity
}

export interface ICartEntity {
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
  product: TProduct
}

export interface IAddedProduct {
  product: number
  cart: number
  amount: number
}

interface IObjectWithImage {
  image: string
  index?: number
}

type TImgList = Array<IObjectWithImage>

type TProduct = {
  label_popular: boolean
  label_hit: boolean
  id: number
  category: string
  brand: string
  price: number
  name: string
  slug: string
  description: string
  code: number
  wb_urls: string
  quantity: number
  is_deleted: boolean
  wholesale: number
  images: TImgList
}
