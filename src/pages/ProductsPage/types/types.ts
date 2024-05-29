import { IProduct } from '@/shared/model/types/ProductModel'

export interface ProductsData {
  id: number
  category: string
  brand: string
  images: TImgList
  price: number
  name: string
  slug: string
  description: string
  code: number
  wb_urls: string
  quantity: number
  is_deleted: boolean
  wholesale: number
  label_hit: boolean
  label_popular: boolean
}

export interface ProductsInfo {
  category_name: string
  count: number
  next: string
  previous: string
  results: IProduct[]
}

export interface ICategoryProductsSchema {
  isLoading: boolean
  productsData: ProductsInfo
  error?: string | string[]
}

export interface IObjectWithImage {
  image: string
  index?: number
}

export type TImgList = Array<IObjectWithImage>
