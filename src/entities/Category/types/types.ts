export interface CategorySchema {
  categories: Category[]
  displayedCategories: Category[]
}

export interface Category {
  id?: number
  name: string
  slug: string
  branches?: Category[]
  root?: Category
  is_prohibited?: boolean
  is_visible_on_main?: boolean
  image?: string
  type?: 'category'
}
