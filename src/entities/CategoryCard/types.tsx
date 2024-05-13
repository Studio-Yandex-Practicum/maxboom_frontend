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
