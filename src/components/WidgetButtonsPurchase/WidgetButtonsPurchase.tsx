import React, { FC } from 'react'
import { Button, EButtonColor, EButtonSize } from '../../pages/ProductsPage/Button/Button'
import IconCart from '../../assets/icons/IconCart'
import IconEye from '../../assets/icons/IconEye'
import { ECardView } from '../../utils/types'

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
  const size = layout === ECardView.COMPACT ? EButtonSize.Small : EButtonSize.XSmall

  return (
    <>
      <Button color={isInCart ? EButtonColor.Success : EButtonColor.Primary} size={size} onClick={handleAddToCart}>
        <IconCart />
        Купить
      </Button>
      <Button color={EButtonColor.Outlined} size={size} onClick={onEyeClick}>
        <IconEye />
      </Button>
    </>
  )
}
