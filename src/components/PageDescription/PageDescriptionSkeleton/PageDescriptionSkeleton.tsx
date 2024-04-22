import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from '@/components/PageDescription/PageDescriptionSkeleton/PageDescriptionSkeleton.module.scss'

export const PageDescriptionSkeleton: FC = () => {
  return (
    <div className={styles['sk-content__description']}>
      <div>
        <Skeleton className={styles['sk-content']} inline={true} />
      </div>
      <Skeleton className={styles['sk-content__breadcrumbs']} inline={true} />
    </div>
  )
}
