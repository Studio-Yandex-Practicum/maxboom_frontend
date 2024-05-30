import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getCategorySelector } from '@/widgets/CategoryList/selectors/selectors'
import type { BranchesData, MainCategoryInfo } from '@/widgets/CategoryList/types/types'

/**
 * Функция сравнения и вывода активной категории и подкатегории
 * @param {MainCategoryInfo} item - значение, которое нужно заменить;
 */
export const useHandleActiveItem = (item: MainCategoryInfo) => {
  const { slug } = useParams()
  const getMainCategories = useSelector(getCategorySelector)

  const [itemActive, setItemActive] = useState<MainCategoryInfo | BranchesData>()
  const [branch, setBranch] = useState<MainCategoryInfo | BranchesData>()

  const activeMainCategory = getMainCategories.find(el => el.slug === slug)
  const activeBranchCategory = item.branches.find(el => el.slug === slug)

  useEffect(() => {
    if (activeMainCategory) {
      setItemActive(activeMainCategory)
    } else if (activeBranchCategory) {
      setItemActive(activeBranchCategory)
      setBranch(getMainCategories.find(el => el.branches.find(el => el.name === itemActive?.name)))
    }
  }, [itemActive])
  return { itemActive, branch }
}
