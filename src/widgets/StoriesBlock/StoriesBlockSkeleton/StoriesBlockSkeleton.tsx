import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './StoriesBlockSkeleton.module.scss'

const StoriesBlockSkeleton: FC = () => {
  return (
    <div className={styles.skeletonNewsCard}>
      <Skeleton height={180} width="100%" />
      <div className={styles.content}>
        <Skeleton width="60%" />
        <Skeleton width="80%" />
      </div>
    </div>
  )
}

export default StoriesBlockSkeleton
