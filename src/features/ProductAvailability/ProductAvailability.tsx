import { FC } from 'react'

import styles from './ProductAvailability.module.scss'

/**
 * Компонент с версткой информации о наличии товара на складе и его артикулом.
 */
type Props = {
  code: number
  quantity: number
}
export const ProductAvailability: FC<Props> = ({ code, quantity }) => {
  return (
    <div className={styles['product-card__info']}>
      <span className={styles['product-card__availability']}>
        {quantity > 0 ? (
          <>
            <span className={styles['product-card__status-dot']}></span>На складе
          </>
        ) : (
          <>
            <span className={styles['product-card__status-zero']}></span>Нет на складе
          </>
        )}
      </span>
      <span className={styles['product-card__code']}>Код товара: {code}</span>
    </div>
  )
}
