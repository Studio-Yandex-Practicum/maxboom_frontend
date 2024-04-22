import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from '@/features/CategoryItem/CategoryItemSkeleton/CategoryItemSkeleton.module.scss'

export const CategoryItemSkeleton: FC = () => {
  return <Skeleton className={styles['sk-category-list__item']} inline={true} />
}
