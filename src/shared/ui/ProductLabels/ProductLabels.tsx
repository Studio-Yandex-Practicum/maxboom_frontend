import classnames from 'classnames'
import { FC } from 'react'

import { ECardView } from '@/shared/model/types/common'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'

import styles from './ProductLabels.module.scss'

type TProductCard = {
  layout: ECardView
  label_hit: boolean
  label_popular: boolean
}

/**
 * Компонент лейбла на карточке товара.
 * @param {ECardView} props.layout- текущий вид отображения карточки товара;
 */
export const ProductLabels: FC<TProductCard> = ({ layout, label_popular, label_hit }) => {
  return (
    <div
      className={classnames(styles['product-item__labels'], {
        [getStylesForCurrentLayout('product-item__labels', styles)[layout]]: layout
      })}>
      {label_popular && <span className={styles['product-item__label-popular']}>Популярный</span>}
      {label_hit && <span className={styles['product-item__label-hit']}>Хит</span>}
    </div>
  )
}
