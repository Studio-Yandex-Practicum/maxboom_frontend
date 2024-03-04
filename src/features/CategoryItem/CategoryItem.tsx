import { FC } from 'react'

import styles from '@/features/CategoryItem/CategoryItem.module.scss'
import Link from '@/shared/ui/Link/Link'

export const CategoryItem: FC = () => {
  return (
    <li className={styles['category-list__item']}>
      <Link to="#" className={styles['category-list__link']}>
        SSD-накопители (1)
      </Link>
    </li>
  )
}
