import { TCategory } from '@/shared/model/types/CategoryModel'

export interface CategoryList {
  category: TCategory[]
}

export interface CategoryListSchema {
  isLoading: boolean
  categoryList: CategoryList
  error?: string | string[]
}
