import { Category } from '@/entities/Category/types/types'
import { TProduct } from '@/shared/model/types/common'

export interface SearchResultSchema {
  categories: Category[]
  products: TProduct[]
  error?: string | string[]
}
