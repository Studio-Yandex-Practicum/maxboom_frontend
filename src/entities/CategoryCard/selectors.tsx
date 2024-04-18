import { RootState } from './types' // Подставьте путь к вашему корневому типу состояния

export const selectCategory = (state: RootState, categoryId: string): Category | undefined => {
  return state.categories.find(category => category.id === categoryId)
}
