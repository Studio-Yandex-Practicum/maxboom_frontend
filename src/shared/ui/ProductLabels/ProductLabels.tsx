import classnames from 'classnames'
import { FC } from 'react'

import { ECardView } from '@/shared/model/types/common'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'

import styles from './ProductLabels.module.scss'

type TProductCard = {
  layout: ECardView
}

/**
 * Компонент лейбла на карточке товара.
 * @param {ECardView} props.layout- текущий вид отображения карточки товара;
 */
export const ProductLabels: FC<TProductCard> = ({ layout }) => {
  return (
    <div
      className={classnames(styles['product-item__labels'], {
        [getStylesForCurrentLayout('product-item__labels', styles)[layout]]: layout
      })}>
      <span className={styles['product-item__label']}>Хит</span>
    </div>
  )
}
