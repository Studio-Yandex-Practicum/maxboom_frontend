import React, { FC, useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { ProductPopupContentFooter } from '../ProductPopupContentFooter/ProductPopupContentFooter'
import { ProductPopupContentHeader } from '../ProductPopupContentHeader/ProductPopupContentHeader'
import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import styles from './ProductPopupContent.module.scss'

/**
 * Компонент с контентом поп-апа товара.
 */
export const ProductPopupContent: FC = () => {
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)

  const handleAddToCart = () => {
    setIsInCart(!isInCart)
  }

  const handleQuickPurchase = () => {
    // ... Открыть поп-ап оформления быстрого заказа
  }

  const handleRedirect = () => {
    // ... Перенаправить пользователя на страницу товара
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  return (
    <section className={styles['popup-card']}>
      {/* @TODO: Добавить компонент для фотографии товара
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/41 */}
      <img
        src={require('../../assets/images/product/1-260x260.webp')}
        alt="GPS-трекер"
        className={styles['popup-card__image']}
      />
      <div className={styles.description}>
        <ProductPopupContentHeader
          isLiked={isLiked}
          isInCompared={isInCompared}
          handleLike={handleLike}
          handleAddToCompared={handleAddToCompared}
        />
        <main className={styles.main}>
          <ProductAvailability />
          <p className={styles.price}>989 ₽</p>
          <p className={styles.quantity}>9999 или более: 989 ₽</p>
          <div className={styles.buttons}>
            <Button color={isInCart ? 'success' : 'primary'} size="m" onClick={handleAddToCart}>
              Купить
            </Button>
            <Button color="secondary" size="m" onClick={handleQuickPurchase}>
              Быстрый заказ{' '}
            </Button>
          </div>
        </main>
        <ProductPopupContentFooter handleRedirect={handleRedirect} />
      </div>
    </section>
  )
}
