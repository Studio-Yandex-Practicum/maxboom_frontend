import { Category } from '@/entities/Category/types/types'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'

import styles from './CatalogNodeItem.module.scss'

/**
 * Компонент ссылки на раздел каталога для выпадающего списка меню "Все категории"
 */
const CatalogNodeItem = ({ slug, name }: Category) => {
  return (
    <li className={styles.li}>
      <Link to={`${Routes.CATEGORIES}/${slug}`} className={styles.link}>
        {name}
      </Link>
    </li>
  )
}

export default CatalogNodeItem
