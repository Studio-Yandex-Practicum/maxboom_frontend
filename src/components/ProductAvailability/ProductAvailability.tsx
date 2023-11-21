import { FC } from 'react'
import styles from './ProductAvailability.module.scss'

/**
 * Компонент с версткой информации о наличии товара на складе и его артикулом.
 */
export const ProductAvailability: FC = () => {
  return (
    <div className={styles['product-card__info']}>
      <span className={styles['product-card__availability']}>
        <span className={styles['product-card__status-dot']}></span>
        На складе
      </span>
      <span className={styles['product-card__code']}>Код товара: 38024926</span>
    </div>
  )
}
