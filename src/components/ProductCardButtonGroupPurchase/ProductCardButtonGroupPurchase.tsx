import React, { FC } from 'react'
import { Button } from '../../pages/ProductsPage/Button/Button'
import IconCart from '../../assets/icons/IconCart'
import IconEye from '../../assets/icons/IconEye'
import { ECardView } from '../../utils/types'

type TProductCardButtonsGroupPurchase = {
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
export const ProductCardButtonsGroupPurchase: FC<TProductCardButtonsGroupPurchase> = ({
  isInCart,
  handleAddToCart,
  onEyeClick,
  layout
}) => {
  const size = layout === 'compact' ? 's' : 'xs'

  return (
    <>
      <Button color={isInCart ? 'success' : 'primary'} size={size} onClick={handleAddToCart}>
        <IconCart />
        Купить
      </Button>
      <Button color="outlined" size={size} onClick={onEyeClick}>
        <IconEye />
      </Button>
    </>
  )
}
