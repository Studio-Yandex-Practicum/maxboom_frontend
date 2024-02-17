import classnames from 'classnames'
import { FC, useState } from 'react'

import { ProductAvailability } from '@/features/ProductAvailability/ProductAvailability'
import { WidgetButtonsFunctions } from '@/features/WidgetButtonsFunctions/WidgetButtonsFunctions'
import { WidgetButtonsPurchase } from '@/features/WidgetButtonsPurchase/WidgetButtonsPurchase'
import { PRODUCT_PHOTOS } from '@/mockData/productsPageOptions'
import { ECardView } from '@/shared/model/types/common'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'
import Carousel from '@/widgets/Carousel/Carousel'

import styles from './ProductItem.module.scss'

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
}

/**
 * Компонент карточки товара в списке товаров.
 * @param {string} layout - тип выбранной сетки отображения карточек товаров;
 * @param {function} onEyeClick - функция для открытия поп-апа с подробной информацией о товаре;
 */
export const ProductItem: FC<TProductCard> = ({ layout, onEyeClick }) => {
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
      className={classnames(styles['product-item'], {
        [getStylesForCurrentLayout('product-item', styles)[layout]]: layout
      })}>
      {layout === 'list' && (
        <div
          className={classnames(styles['product-item__buttons'], {
            [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
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
        className={classnames(styles['product-item__header'], {
          [getStylesForCurrentLayout('product-item__header', styles)[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-item__labels'], {
            [getStylesForCurrentLayout('product-item__labels', styles)[layout]]: layout
          })}>
          <span className={styles['product-item__label']}>Хит</span>
        </div>
        {layout === 'grid' && (
          <div
            className={classnames(styles['product-item__buttons'], {
              [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
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
        className={classnames(styles['product-item__description'], {
          [getStylesForCurrentLayout('product-item__description', styles)[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-item__description-container'], {
            [getStylesForCurrentLayout('product-item__description-container', styles)[layout]]: layout
          })}>
          <ProductAvailability />
          <Heading type={HeadingType.PRODUCT}>
            GPS-трекер для отслеживания собак, детей, автомобилей с приложением на телефон.
          </Heading>
          <div
            className={classnames(styles['product-item__price-block'], {
              [getStylesForCurrentLayout('product-item__price-block', styles)[layout]]: layout
            })}>
            <span className={styles['product-item__price']}>989 ₽</span>
            {layout !== 'compact' && (
              <div
                className={classnames(styles['product-item__actions-block'], {
                  [getStylesForCurrentLayout('product-item__actions-block', styles)[layout]]: layout
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
          <Paragraph>
            GSM/GPS трекер-маяк GF-07 для отслеживания собак, детей, автомобилей с приложением на телефон.
            Миниатюрный GPS трекер модели GF-07 предназначен для охраны вашего имущества и контроля за
            местонахождением.
          </Paragraph>
        )}
        {layout === 'compact' && (
          <div
            className={classnames(styles['product-item__buttons'], {
              [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
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
