import React, { FC, useState } from 'react'
import { ECardView } from '../../utils/types'
import styles from './ProductCard.module.scss'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
import classnames from 'classnames'

type TProductCard = {
  layout: ECardView
}

/**
 * Компонент карточки товара в списке товаров.
 * @param {string} layout - тип выбранной сетки отображения карточек товаров;
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProductCard: FC<TProductCard> = ({ layout }) => {
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

  // @TODO: стиль карточки в зависимости от cardView компонента PageControls
  // https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/62
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__header']}>
        <div className={styles['product-card__labels']}>
          <span className={styles['product-card__label']}>Хит</span>
        </div>
        <div className={styles['product-card__buttons']}>
          <div onClick={handleAddToCompared} className={styles['product-card__button-container']}>
            <button className={styles['product-card__button']} />
            <IconCompare
              styles={classnames(styles['product-card__icon'], {
                [styles['product-card__icon_active']]: isInCompared
              })}
            />
          </div>
          <div onClick={handleLike} className={styles['product-card__button-container']}>
            <button className={styles['product-card__button']} />
            <IconLike
              styles={classnames(styles['product-card__icon'], {
                [styles['product-card__icon_active']]: isLiked
              })}
            />
          </div>
        </div>
      </div>
      {/* @TODO: Добавить компонент для фотографии товара
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/41 */}
      <img
        src={require('../../assets/images/product/1-260x260.webp')}
        alt="GPS-трекер"
        className={styles['product-card__image']}
      />
      <div className={styles['product-card__description']}>
        <div className={styles['product-card__info']}>
          <span className={styles['product-card__availability']}>
            <span className={styles['product-card__status-dot']}></span>
            На складе
          </span>
          <span className={styles['product-card__code']}>Код товара: 38024926</span>
        </div>
        <h3 className={styles['product-card__title']}>
          GPS-трекер для отслеживания собак, детей, автомобилей с приложением на телефон.
        </h3>
        <div className={styles['product-card__price-block']}>
          <span className={styles['product-card__price']}>989 ₽</span>
          <div className={styles['product-card__actions-block']}>
            <button
              className={classnames(styles['product-card__button-buy'], {
                [styles['product-card__button-buy_active']]: isInCart
              })}
              onClick={handleAddToCart}>
              Купить
            </button>
            <button className={styles['product-card__button-eye']} />
          </div>
        </div>
      </div>
    </div>
  )
}
