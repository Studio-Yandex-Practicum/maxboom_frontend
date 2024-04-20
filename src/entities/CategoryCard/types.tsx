// Тип данных для категории
export interface Category {
  id: string
  name: string
  image: string
}

export interface CategoryInfo {
  name: string
  count: number
  next: string
  previous: string
  results: Category[]
}

// Тип данных для состояния
export interface RootState {
  categories: Category[] // массив категорий
}

export interface ICategorySchema {
  isLoading: boolean
  category: CategoryInfo
  error?: string | string[] | null | undefined
}
