import React, { FC, useState } from 'react'
import { ECardView } from '../../utils/types'
import styles from './ProductCard.module.scss'
import classnames from 'classnames'
import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import { ProductCardButtonsGroupFunctions } from '../ProductCardButtonGroupFunctions/ProductCardButtonGroupFunctions'
import { ProductCardButtonsGroupPurchase } from '../ProductCardButtonGroupPurchase/ProductCardButtonGroupPurchase'

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
}

const getStylesForCurrentLayout = (element: string) => {
  return {
    grid: styles[`${element}_type_grid`],
    list: styles[`${element}_type_list`],
    compact: styles[`${element}_type_compact`]
  }
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
        [getStylesForCurrentLayout('product-card')[layout]]: layout
      })}>
      {layout === 'list' && (
        <div
          className={classnames(styles['product-card__buttons'], {
            [getStylesForCurrentLayout('product-card__buttons')[layout]]: layout
          })}>
          <ProductCardButtonsGroupFunctions
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
          [getStylesForCurrentLayout('product-card__header')[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__labels'], {
            [getStylesForCurrentLayout('product-card__labels')[layout]]: layout
          })}>
          <span className={styles['product-card__label']}>Хит</span>
        </div>
        {layout === 'grid' && (
          <div
            className={classnames(styles['product-card__buttons'], {
              [getStylesForCurrentLayout('product-card__buttons')[layout]]: layout
            })}>
            <ProductCardButtonsGroupFunctions
              isLiked={isLiked}
              isInCompared={isInCompared}
              handleLike={handleLike}
              handleAddToCompared={handleAddToCompared}
              layout={layout}
            />
          </div>
        )}
      </div>
      {/* @TODO: Добавить компонент для фотографии товара
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/41 */}
      <img
        src={require('../../assets/images/product/1-260x260.webp')}
        alt="GPS-трекер"
        className={classnames(styles['product-card__image'], {
          [getStylesForCurrentLayout('product-card__image')[layout]]: layout
        })}
      />
      <div
        className={classnames(styles['product-card__description'], {
          [getStylesForCurrentLayout('product-card__description')[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__description-container'], {
            [getStylesForCurrentLayout('product-card__description-container')[layout]]: layout
          })}>
          <ProductAvailability />
          <h3 className={styles['product-card__title']}>
            GPS-трекер для отслеживания собак, детей, автомобилей с приложением на телефон.
          </h3>
          <div
            className={classnames(styles['product-card__price-block'], {
              [getStylesForCurrentLayout('product-card__price-block')[layout]]: layout
            })}>
            <span className={styles['product-card__price']}>989 ₽</span>
            {layout !== 'compact' && (
              <div
                className={classnames(styles['product-card__actions-block'], {
                  [getStylesForCurrentLayout('product-card__actions-block')[layout]]: layout
                })}>
                <ProductCardButtonsGroupPurchase
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
            GSM/GPS трекер-маяк GF-07 для отслеживания собак, детей, автомобилей с приложением на телефон. Миниатюрный
            GPS трекер модели GF-07 предназначен для охраны вашего имущества и контроля за местонахождением.
          </p>
        )}
        {layout === 'compact' && (
          <div
            className={classnames(styles['product-card__buttons'], {
              [getStylesForCurrentLayout('product-card__buttons')[layout]]: layout
            })}>
            <ProductCardButtonsGroupPurchase
              isInCart={isInCart}
              handleAddToCart={handleAddToCart}
              onEyeClick={onEyeClick}
              layout={layout}
            />
            <ProductCardButtonsGroupFunctions
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
