export interface ICart {
  id: number
  products: IProductListData[]
  user: number
  cart_full_price: number
}

export interface IProductListData {
  amount: number
  product: IProductData
  full_price: number
}
export interface IProductData {
  id: number
  category: string
  brand: string
  images: IImageData[]
  price: string
  name: string
  slug: string
  description: string
  code: number
  wb_urls: string
  quantity?: number
  is_deleted?: boolean
  wholesale?: number
  label_hit?: boolean
  label_popular?: boolean
}
export interface IImageData {
  image: string
}

export interface ICartSchema {
  isLoading: boolean
  cart: ICart
  error?: string | string[]
}
