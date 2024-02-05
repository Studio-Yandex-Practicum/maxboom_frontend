import classnames from 'classnames'
import { FC, useState } from 'react'

import { PRODUCT_PHOTOS } from '@/mockData/productsPageOptions'
import { ECardView } from '@/shared/model/types/common'
import Carousel from '@/shared/ui/Carousel/Carousel'

import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import { WidgetButtonsFunctions } from '../WidgetButtonsFunctions/WidgetButtonsFunctions'
import { WidgetButtonsPurchase } from '../WidgetButtonsPurchase/WidgetButtonsPurchase'

import styles from './ProductCard.module.scss'
import { getStylesForCurrentLayout } from './utils/utils'

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
}

/**
 * Компонент карточки товара в списке товаров.
 * @param {string} layout - тип выбранной сетки отображения карточек товаров;
 * @param {function} onEyeClick - функция для открытия поп-апа с подробной информацией о товаре;
 */
export const ProductCard: FC<TProductCard> = ({ layout, onEyeClick }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)

  const handleAddToCart = () => {
    setIsInCart(!isInCart)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  return (
    <div
      className={classnames(styles['product-card'], {
        [getStylesForCurrentLayout('product-card', styles)[layout]]: layout
      })}>
      {layout === 'list' && (
        <div
          className={classnames(styles['product-card__buttons'], {
            [getStylesForCurrentLayout('product-card__buttons', styles)[layout]]: layout
          })}>
          <WidgetButtonsFunctions
            isLiked={isLiked}
            isInCompared={isInCompared}
            handleLike={handleLike}
            handleAddToCompared={handleAddToCompared}
            layout={layout}
          />
        </div>
      )}
      <div
        className={classnames(styles['product-card__header'], {
          [getStylesForCurrentLayout('product-card__header', styles)[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__labels'], {
            [getStylesForCurrentLayout('product-card__labels', styles)[layout]]: layout
          })}>
          <span className={styles['product-card__label']}>Хит</span>
        </div>
        {layout === 'grid' && (
          <div
            className={classnames(styles['product-card__buttons'], {
              [getStylesForCurrentLayout('product-card__buttons', styles)[layout]]: layout
            })}>
            <WidgetButtonsFunctions
              isLiked={isLiked}
              isInCompared={isInCompared}
              handleLike={handleLike}
              handleAddToCompared={handleAddToCompared}
              layout={layout}
            />
          </div>
        )}
      </div>
      <Carousel photos={PRODUCT_PHOTOS} layout={layout} />
      <div
        className={classnames(styles['product-card__description'], {
          [getStylesForCurrentLayout('product-card__description', styles)[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__description-container'], {
            [getStylesForCurrentLayout('product-card__description-container', styles)[layout]]: layout
          })}>
          <ProductAvailability />
          <h3 className={styles['product-card__title']}>
            GPS-трекер для отслеживания собак, детей, автомобилей с приложением на телефон.
          </h3>
          <div
            className={classnames(styles['product-card__price-block'], {
              [getStylesForCurrentLayout('product-card__price-block', styles)[layout]]: layout
            })}>
            <span className={styles['product-card__price']}>989 ₽</span>
            {layout !== 'compact' && (
              <div
                className={classnames(styles['product-card__actions-block'], {
                  [getStylesForCurrentLayout('product-card__actions-block', styles)[layout]]: layout
                })}>
                <WidgetButtonsPurchase
                  isInCart={isInCart}
                  handleAddToCart={handleAddToCart}
                  onEyeClick={onEyeClick}
                  layout={layout}
                />
              </div>
            )}
          </div>
        </div>
        {layout === 'list' && (
          <p className={styles['product-card__description-full']}>
            GSM/GPS трекер-маяк GF-07 для отслеживания собак, детей, автомобилей с приложением на телефон.
            Миниатюрный GPS трекер модели GF-07 предназначен для охраны вашего имущества и контроля за
            местонахождением.
          </p>
        )}
        {layout === 'compact' && (
          <div
            className={classnames(styles['product-card__buttons'], {
              [getStylesForCurrentLayout('product-card__buttons', styles)[layout]]: layout
            })}>
            <WidgetButtonsPurchase
              isInCart={isInCart}
              handleAddToCart={handleAddToCart}
              onEyeClick={onEyeClick}
              layout={layout}
            />
            <WidgetButtonsFunctions
              isLiked={isLiked}
              isInCompared={isInCompared}
              handleLike={handleLike}
              handleAddToCompared={handleAddToCompared}
              layout={layout}
            />
          </div>
        )}
      </div>
    </div>
  )
}
