import React, { FC, useState } from 'react'
import { ECardView } from '../../utils/types'
import styles from './ProductCard.module.scss'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
import classnames from 'classnames'
import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import { Button } from '../../pages/ProductsPage/Button/Button'
import IconCart from '../../assets/icons/IconCart'
import IconEye from '../../assets/icons/IconEye'

type TProductCard = {
  layout: ECardView
  onEyeClick: VoidFunction
}

const layoutToStyleMapping = {
  grid: styles['product-card_type_grid'],
  list: styles['product-card_type_list'],
  compact: styles['product-card_type_compact']
}

const headerlayoutToStyleMapping = {
  grid: styles['product-card__header_type_grid'],
  list: styles['product-card__header_type_list'],
  compact: styles['product-card__header_type_compact']
}

const labelLayoutToStyleMapping = {
  grid: styles['product-card__labels_type_grid'],
  list: styles['product-card__labels_type_list'],
  compact: styles['product-card__labels_type_compact']
}

const buttonLayoutToStyleMapping = {
  grid: styles['product-card__buttons_type_grid'],
  list: styles['product-card__buttons_type_list'],
  compact: styles['product-card__buttons_type_compact']
}

const imageLayoutToStyleMapping = {
  grid: styles['product-card__image_type_grid'],
  list: styles['product-card__image_type_list'],
  compact: styles['product-card__image_type_compact']
}

const descriptionLayoutToStyleMapping = {
  grid: styles['product-card__description_type_grid'],
  list: styles['product-card__description_type_list'],
  compact: styles['product-card__description_type_compact']
}

const descriptionContainerLayoutToStyleMapping = {
  grid: styles['product-card__description-container_type_grid'],
  list: styles['product-card__description-container_type_list'],
  compact: styles['product-card__description-container_type_compact']
}

const priceBlockLayoutToStyleMapping = {
  grid: styles['product-card__price-block_type_grid'],
  list: styles['product-card__price-block_type_list'],
  compact: styles['product-card__price-block_type_compact']
}

const actionsBlockLayoutToStyleMapping = {
  grid: styles['product-card__actions-block_type_grid'],
  list: styles['product-card__actions-block_type_list'],
  compact: styles['product-card__actions-block_type_compact']
}

/**
 * Компонент карточки товара в списке товаров.
 * @param {string} layout - тип выбранной сетки отображения карточек товаров;
 * @param {function} onEyeClick - функция для открытия поп-апа с подробной информацией о товаре;
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProductCard: FC<TProductCard> = ({ layout, onEyeClick }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  console.log(layout)

  const handleAddToCart = () => {
    setIsInCart(!isInCart)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  // @TODO: стиль карточки в зависимости от cardView компонента PageControls
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/62
  return (
    <div
      className={classnames(styles['product-card'], {
        [layoutToStyleMapping[layout]]: layout
      })}>
      {layout === 'list' && (
        <div
          className={classnames(styles['product-card__buttons'], {
            [buttonLayoutToStyleMapping[layout]]: layout
          })}>
          <div onClick={handleAddToCompared} className={styles['product-card__button-container']}>
            <Button size="xs" color="transparent" onClick={handleAddToCompared}>
              <IconCompare
                styles={classnames(styles['product-card__icon'], {
                  [styles['product-card__icon_active']]: isInCompared
                })}
              />
            </Button>
          </div>
          <div onClick={handleLike} className={styles['product-card__button-container']}>
            <Button size="xs" color="transparent" onClick={handleLike}>
              <IconLike
                styles={classnames(styles['product-card__icon'], {
                  [styles['product-card__icon_active']]: isLiked
                })}
              />
            </Button>
          </div>
        </div>
      )}
      <div
        className={classnames(styles['product-card__header'], {
          [headerlayoutToStyleMapping[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__labels'], {
            [labelLayoutToStyleMapping[layout]]: layout
          })}>
          <span className={styles['product-card__label']}>Хит</span>
        </div>
        {layout === 'grid' && (
          <div
            className={classnames(styles['product-card__buttons'], {
              [buttonLayoutToStyleMapping[layout]]: layout
            })}>
            <div onClick={handleAddToCompared} className={styles['product-card__button-container']}>
              <Button size="xs" color="transparent" onClick={handleAddToCompared}>
                <IconCompare
                  styles={classnames(styles['product-card__icon'], {
                    [styles['product-card__icon_active']]: isInCompared
                  })}
                />
              </Button>
            </div>
            <div onClick={handleLike} className={styles['product-card__button-container']}>
              <Button size="xs" color="transparent" onClick={handleLike}>
                <IconLike
                  styles={classnames(styles['product-card__icon'], {
                    [styles['product-card__icon_active']]: isLiked
                  })}
                />
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* @TODO: Добавить компонент для фотографии товара
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/41 */}
      <img
        src={require('../../assets/images/product/1-260x260.webp')}
        alt="GPS-трекер"
        className={classnames(styles['product-card__image'], {
          [imageLayoutToStyleMapping[layout]]: layout
        })}
      />
      <div
        className={classnames(styles['product-card__description'], {
          [descriptionLayoutToStyleMapping[layout]]: layout
        })}>
        <div
          className={classnames(styles['product-card__description-container'], {
            [descriptionContainerLayoutToStyleMapping[layout]]: layout
          })}>
          <ProductAvailability />
          <h3 className={styles['product-card__title']}>
            GPS-трекер для отслеживания собак, детей, автомобилей с приложением на телефон.
          </h3>
          <div
            className={classnames(styles['product-card__price-block'], {
              [priceBlockLayoutToStyleMapping[layout]]: layout
            })}>
            <span className={styles['product-card__price']}>989 ₽</span>
            {layout !== 'compact' && (
              <div
                className={classnames(styles['product-card__actions-block'], {
                  [actionsBlockLayoutToStyleMapping[layout]]: layout
                })}>
                <>
                  <Button color={isInCart ? 'success' : 'primary'} size="xs" onClick={handleAddToCart}>
                    <IconCart />
                    Купить
                  </Button>
                  <Button color="transparent" size="xs" onClick={onEyeClick}>
                    <IconEye />
                  </Button>
                </>
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
              [buttonLayoutToStyleMapping[layout]]: layout
            })}>
            <Button color={isInCart ? 'success' : 'primary'} size="s" onClick={handleAddToCart}>
              <IconCart />
              Купить
            </Button>
            <Button color="outlined" size="s" onClick={onEyeClick}>
              <IconEye />
            </Button>
            <Button size="s" color="outlined" onClick={handleAddToCompared}>
              <IconCompare
                styles={classnames(styles['product-card__icon'], {
                  [styles['product-card__icon_active']]: isInCompared
                })}
              />
            </Button>
            <Button size="s" color="outlined" onClick={handleLike}>
              <IconLike
                styles={classnames(styles['product-card__icon'], {
                  [styles['product-card__icon_active']]: isLiked
                })}
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
