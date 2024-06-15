import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './NewsBlockSkeleton.module.scss'

const NewsBlockSkeleton: FC = () => {
  return (
    <div className={styles.skeletonNewsCard}>
      <Skeleton height={180} />
      <div className={styles.content}>
        <Skeleton width={`60%`} />
        <Skeleton width={`80%`} />
      </div>
    </div>
  )
}

export default NewsBlockSkeleton
