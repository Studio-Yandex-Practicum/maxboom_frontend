import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './NewsItemPageSkeleton.module.scss'

const NewsItemPageSkeleton: FC = () => {
  return (
    <div className={styles['sk-news-item']}>
      <div className={styles['sk-heading']}>
        <Skeleton className={styles['sk-title']} inline={true} />
        <Skeleton className={styles['sk-breadcrumbs']} inline={true} />
      </div>
      <div className={styles['sk-body']}>
        <Skeleton className={styles['sk-image']} inline={true} />
        <Skeleton className={styles['sk-article']} inline={true} count={4} />
        <Skeleton className={styles['sk-article']} inline={true} count={4} />
      </div>
    </div>
  )
}

export default NewsItemPageSkeleton
