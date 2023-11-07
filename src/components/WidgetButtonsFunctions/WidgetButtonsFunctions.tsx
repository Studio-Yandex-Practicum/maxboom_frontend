import React, { FC } from 'react'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
import classnames from 'classnames'
import { Button, EButtonColor, EButtonSize } from '../../pages/ProductsPage/Button/Button'
import styles from '../ProductCard/ProductCard.module.scss'
import { ECardView } from '../../utils/types'

type TWidgetButtonsFunctions = {
  isLiked: boolean
  handleLike: VoidFunction
  isInCompared: boolean
  handleAddToCompared: VoidFunction
  layout: ECardView
}

/**
 * Компонент (виджет) группы кнопок для добавления в избранное и к сравнению.
 * @param {boolean} isLiked - добавлен ли товар в избранное;
 * @param {function} handleLike - функция добавления товара в избранное;
 * @param {boolean} isInCompared - добавлен ли товар к списку для сравнения;
 * @param {function} handleAddToCompared - функция добавления товара к списку для сравнения;
 * @param {string} layout - текущий вид отображения карточки товара;
 */
export const WidgetButtonsFunctions: FC<TWidgetButtonsFunctions> = ({
  isLiked,
  handleLike,
  isInCompared,
  handleAddToCompared,
  layout
}) => {
  const color = layout === ECardView.COMPACT ? EButtonColor.Outlined : EButtonColor.Transparent
  const size = layout === ECardView.COMPACT ? EButtonSize.Small : EButtonSize.XSmall

  return (
    <>
      <Button size={size} color={color} onClick={handleAddToCompared}>
        <IconCompare
          styles={classnames(styles['product-card__icon'], {
            [styles['product-card__icon_active']]: isInCompared
          })}
        />
      </Button>
      <Button size={size} color={color} onClick={handleLike}>
        <IconLike
          styles={classnames(styles['product-card__icon'], {
            [styles['product-card__icon_active']]: isLiked
          })}
        />
      </Button>
    </>
  )
}
