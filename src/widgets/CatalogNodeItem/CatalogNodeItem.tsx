import type { FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import type { Category } from '@/entities/Category/types/types'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import styles from './CatalogNodeItem.module.scss'

type Props = {
  slug: string
  name: string
  id: number | undefined
}

/**
 * Компонент ссылки на раздел каталога для выпадающего списка меню "Все категории"
 * @param {string} slug - URL для страницы категории;
 * @param {string} name - название категории;
 * @param {number} id - id категории;
 */
const CatalogNodeItem: FC<Props> = ({ slug, name, id }: Category) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <li
      className={styles.li}
      onClick={() => {
        dispatch(setCategoryId(id))
        dispatch(setCategorySlug(slug))
      }}>
      <Link to={`${Routes.CATEGORIES}/${slug}`} className={styles.link}>
        {name}
      </Link>
    </li>
  )
}

export default CatalogNodeItem
