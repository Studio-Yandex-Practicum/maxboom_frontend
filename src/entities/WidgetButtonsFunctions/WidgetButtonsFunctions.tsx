import classnames from 'classnames'
import { FC } from 'react'

import IconCompare from '@/assets/icons/IconCompare.svg'
import IconEye from '@/assets/icons/IconEye.svg'
import IconLike from '@/assets/icons/IconLike'
import styles from '@/features/ProductItem/ProductItem.module.scss'
import { ECardView } from '@/shared/model/types/common'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'

import stylesSvg from './WidgetButtonsFunctions.module.scss'

type TWidgetButtonsFunctions = {
  isLiked: boolean
  handleLike: VoidFunction
  isInCompared: boolean
  handleAddToCompared: VoidFunction
  layout: ECardView
  active?: boolean
  onEyeClick?: VoidFunction
}

/**
 * Компонент (виджет) группы кнопок для добавления в избранное и к сравнению.
 * @param {boolean} isLiked - добавлен ли товар в избранное;
 * @param {function} handleLike - функция добавления товара в избранное;
 * @param {boolean} isInCompared - добавлен ли товар к списку для сравнения;
 * @param {function} handleAddToCompared - функция добавления товара к списку для сравнения;
 * @param {string} layout - текущий вид отображения карточки товара;
 * @param {boolean} active - выводить или нет кнопку;
 * @param {function} onEyeClick - функция открытия поп-апа с дополнительной информацией о товаре;
 */
export const WidgetButtonsFunctions: FC<TWidgetButtonsFunctions> = ({
  isLiked,
  handleLike,
  isInCompared,
  handleAddToCompared,
  layout,
  active,
  onEyeClick
}) => {
  const theme = layout === ECardView.COMPACT ? ButtonTheme.OUTLINED : undefined
  const size = layout === ECardView.COMPACT ? ButtonSize.S : ButtonSize.XS

  return (
    <>
      <Button
        size={size}
        theme={theme}
        onClick={handleAddToCompared}
        className={classnames(stylesSvg.customButton, {
          [getStylesForCurrentLayout('customButton', stylesSvg)[layout]]: layout
        })}>
        <IconCompare
          className={classnames(styles['product-item__icon'], {
            [styles['product-item__icon_active']]: isInCompared
          })}
        />
      </Button>
      <Button
        size={size}
        theme={theme}
        onClick={handleLike}
        className={classnames(stylesSvg.customButton, {
          [getStylesForCurrentLayout('customButton', stylesSvg)[layout]]: layout
        })}>
        <IconLike
          styles={classnames(styles['product-item__icon'], {
            [styles['product-item__icon_active']]: isLiked
          })}
        />
      </Button>
      {active && (
        <Button
          className={classnames(stylesSvg.customButton, stylesSvg.customButton, {
            [getStylesForCurrentLayout('customButton', stylesSvg)[layout]]: layout
          })}
          theme={theme}
          size={size}
          onClick={onEyeClick}>
          <IconEye />
        </Button>
      )}
    </>
  )
}
