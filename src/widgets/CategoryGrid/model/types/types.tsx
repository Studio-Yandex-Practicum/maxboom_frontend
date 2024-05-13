import { TCategory } from '@/shared/model/types/CategoryModel'

export interface CategoryListSchema {
  isLoading: boolean
  categoryList: TCategory[]
  error?: string | string[]
}
