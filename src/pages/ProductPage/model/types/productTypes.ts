export interface IObjectWithImage {
  image: string
  index?: number
}

export type TImgList = Array<IObjectWithImage>

export type TProduct = {
  isPopular?: boolean
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

export type TProductSchema = {
  product: TProduct
  isLoading?: boolean
  error?: string | string[]
}
