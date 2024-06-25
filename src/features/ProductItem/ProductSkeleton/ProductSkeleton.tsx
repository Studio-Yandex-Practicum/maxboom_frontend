import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './ProductSkeleton.module.scss'

export const ProductSkeleton: FC = () => {
  return (
    <div className={`${styles['sk-product-item']} ${styles['sk-product-item_type_grid']}`}>
      <div className={styles['sk-product-item__header']}>
        <Skeleton className={styles['sk-product-item__buttons']} />
      </div>
      <div>
        <Skeleton className={styles['sk-product-item__carousel']} />
        <div className={styles['sk-product-item__indicator']}>
          <div className={styles['sk-product-item__dot']}></div>
        </div>
      </div>
      <div>
        <div className={styles['sk-product-item__description-container']}>
          <Skeleton />
          <Skeleton className={styles['sk-product-card__info']} />
          <div>
            <Skeleton className={styles['sk-product-item__price']} />
          </div>
        </div>
      </div>
    </div>
  )
}
