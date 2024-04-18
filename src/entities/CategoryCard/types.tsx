// Тип данных для категории
export interface Category {
  id: string
  name: string
}

// Тип данных для состояния
export interface RootState {
  categories: Category[] // массив категорий
}
