import { IProduct } from '@/shared/model/types/ProductModel'

export type TProductSchema = {
  product: IProduct
  isLoading?: boolean
  error?: string | string[]
}
