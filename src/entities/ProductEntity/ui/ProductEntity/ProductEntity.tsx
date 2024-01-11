import { TProduct } from '@/mockData/productsData'
import styles from './ProductEntity.module.scss'
import { type FC } from 'react'

export const ProductEntity: FC<TProduct> = product => {
  return (
    <div className={`${styles.description}`}>
      <div className={`${styles.frame}`}>
        <img src={product.src} alt={'product'} className={styles.image} />
      </div>
      <div className={`${styles.description_wrapper}`}>
        <span className={`${styles.number}`}>{product.article}</span>
        <a className={`${styles.name}`}>{product.name}</a>
      </div>
    </div>
  )
}
