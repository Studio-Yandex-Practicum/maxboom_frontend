export interface ICategorySchema {
  isLoading: boolean
  categoryInfo: CategoryInfo
  error?: string | string[]
}

export interface CategoryInfo {
  id: number
  name: string
  slug: string
  branches: BranchesData[]
  root: boolean | null
  is_prohibited: boolean
  is_visible_on_main: boolean
  image?: [] | null
}

export interface BranchesData {
  id: number
  name: string
  slug: string
  products_count: number
  branches: BranchesData[]
}

export interface IMainCategorySchema {
  isLoading: boolean
  mainCategoriesInfo: MainCategoryInfo[]
  error?: string | string[]
}

export interface MainCategoryInfo {
  total_count?: number
  id: number
  name: string
  slug: string
  branches: BranchesData[]
  root: boolean | null
  is_prohibited: boolean
  is_visible_on_main: boolean
  image?: [] | null
}
