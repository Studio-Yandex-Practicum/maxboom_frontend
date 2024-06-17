import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './ViewedProductsSkeleton.module.scss'

const ViewedProductsSkeleton: FC = () => {
  return (
    <div className={styles.skeletonViewedProductsCard}>
      <Skeleton width="100%" height={240} />
    </div>
  )
}

export default ViewedProductsSkeleton
