import type { BranchesData, MainCategoryInfo } from '@/widgets/CategoryList/types/types'

export type TCategorySidebar = {
  to?: string | undefined
  activeElement?: MainCategoryInfo | BranchesData
  branch?: MainCategoryInfo | BranchesData
  itemName?: string
}
