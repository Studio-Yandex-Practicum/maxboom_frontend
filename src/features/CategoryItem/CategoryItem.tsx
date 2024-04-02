import type { FC } from 'react'
import { useDispatch } from 'react-redux'

import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import styles from '@/features/CategoryItem/CategoryItem.module.scss'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

type Props = {
  name: string
  slug: string
  count: number
  id: number
}

/**
 * Компонент единицы категории в списке категорий бокового меню
 * @param {string} name - название категории;
 * @param {string} slug - URL для страницы категориии;
 * @param {number} count - количество товаров в категории;
 * @param {number} id - id категории;
 */
export const CategoryItem: FC<Props> = ({ name, slug, count, id }) => {
  const dispatch = useDispatch()
  return (
    <li className={styles['category-list__item']}>
      <Link
        to={`${Routes.CATEGORIES}/${slug}`}
        className={styles['category-list__link']}
        onClick={() => {
          dispatch(setCategoryId(id))
          dispatch(setCategorySlug(slug))
        }}>
        {name} ({count})
      </Link>
    </li>
  )
}
