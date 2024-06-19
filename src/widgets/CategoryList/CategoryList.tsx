import classNames from 'classnames'
import { type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategorySlug } from '@/entities/Category/selectors/categorySelectors'
import { CategoryItem } from '@/features/CategoryItem/CategoryItem'
import { CategoryItemSkeleton } from '@/features/CategoryItem/CategoryItemSkeleton/CategoryItemSkeleton'
import { getLoading } from '@/pages/ProductsPage/selectors/selectors'
import { NUMBER_OF_CATEGORY_LINES } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { getCategorySelector } from '@/widgets/CategoryList/selectors/selectors'
import { getCategoryBranches } from '@/widgets/CategoryList/services/getCategoryBranches'
import { getCategories } from '@/widgets/CategoryList/services/getCatergories'

import styles from './CategoryList.module.scss'

/**
 * Список категорий для страницы товаров.
 * Фиксированная высота настраивается классом .category-list__items
 */

type TCategoryList = {
  className?: string
}
export const CategoryList: FC<TCategoryList> = ({ className }) => {
  const dispatch = useAppDispatch()
  const getMainCategories = useSelector(getCategorySelector)
  const categorySlug = useSelector(selectCategorySlug)

  const { slug } = useParams()

  const isLoading = useSelector(getLoading)

  useEffect(() => {
    dispatch(getCategoryBranches(slug))
    dispatch(getCategories())
  }, [categorySlug, slug])

  return (
    <div className={classNames(styles['category-list'], [className])}>
      <Heading type={HeadingType.NORMAL} className={styles['category-list__title']}>
        Категории
      </Heading>
      <ul className={styles['category-list__items']}>
        {isLoading
          ? Array(NUMBER_OF_CATEGORY_LINES)
              .fill(0)
              .map((_, i) => <CategoryItemSkeleton key={i} />)
          : getMainCategories.map(item => <CategoryItem item={item} key={item.id} />)}
      </ul>
    </div>
  )
}
