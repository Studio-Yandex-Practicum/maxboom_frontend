import classNames from 'classnames'
import { FC } from 'react'

import IconCart from '@/assets/icons/IconCart.svg'
import IconEye from '@/assets/icons/IconEye.svg'
import { ECardView } from '@/shared/model/types/common'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'

import styles from './WidgetButtonsPurchase.module.scss'

type TWidgetButtonsPurchase = {
  isInCart: boolean
  handleAddToCart: VoidFunction
  onEyeClick: VoidFunction
  layout: ECardView
}

/**
 * Компонент (виджет) группы кнопок для добавления в корзину и открытия поп-апа с подробной информацией о товаре.
 * @param {boolean} isInCart - добавлен ли товар в корзину;
 * @param {function} handleAddToCart - функция добавления товара в корзину;
 * @param {function} onEyeClick - функция открытия поп-апа с дополнительной информацией о товаре;
 * @param {string} layout - текущий вид отображения карточки товара;
 */
export const WidgetButtonsPurchase: FC<TWidgetButtonsPurchase> = ({
  isInCart,
  handleAddToCart,
  onEyeClick,
  layout
}) => {
  const size = layout === ECardView.COMPACT ? ButtonSize.S : ButtonSize.XS

  return (
    <div className={styles.customButtonsContainer}>
      <Button
        className={styles.customButton}
        theme={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY}
        size={size}
        onClick={handleAddToCart}>
        <IconCart className={styles.customButton__iconCart} />
        {isInCart ? 'Перейти в корзину' : 'Купить'}
      </Button>
      <Button
        className={classNames(styles.customButton, styles.customButton_eye)}
        theme={ButtonTheme.OUTLINED}
        size={size}
        onClick={onEyeClick}>
        <IconEye />
      </Button>
    </div>
  )
}
