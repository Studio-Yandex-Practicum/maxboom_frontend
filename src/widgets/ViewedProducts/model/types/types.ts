export interface IObjectWithImage {
  image: string
  index?: number
}

export type TImgList = Array<IObjectWithImage>

export type TProduct = {
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

export type LoadingState = {
  isLoading: boolean
}
