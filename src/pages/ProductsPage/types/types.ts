import type { IProduct } from '@/shared/model/types/ProductModel'

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
