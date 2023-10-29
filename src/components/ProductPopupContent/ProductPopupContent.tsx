import React, { FC, useState } from 'react'
import classnames from 'classnames'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
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
        <header className={styles.header}>
          <div className={styles['header-buttons']}>
            <button className={styles['header-button']} onClick={handleLike}>
              <IconLike
                styles={classnames(styles.icon, {
                  [styles['active']]: isLiked
                })}
              />{' '}
              В избранное
            </button>
            <button className={styles['header-button']} onClick={handleAddToCompared}>
              <IconCompare
                styles={classnames(styles.icon, {
                  [styles['active']]: isInCompared
                })}
              />
              В сравнение
            </button>
          </div>
          <div className={styles.procuder}>
            <p className={styles['producer-title']}>Maxboom</p>
            <p className={styles['producer-subtitle']}>Производитель</p>
          </div>
        </header>
        <main className={styles.main}>
          <ProductAvailability />
          <p className={styles.price}>989 ₽</p>
          <p className={styles.quantity}>9999 или более: 989 ₽</p>
          <div className={styles.buttons}>
            <button
              className={classnames(styles.button, styles['button_variant_primary'], {
                [styles.active]: isInCart
              })}
              onClick={handleAddToCart}>
              Купить
            </button>
            <button
              className={classnames(styles.button, styles['button_variant_secondary'], styles['button_no-icon'], {
                [styles.active]: isInCart
              })}
              onClick={handleQuickPurchase}>
              Быстрый заказ{' '}
            </button>
          </div>
        </main>
        <footer className={styles.footer}>
          <button
            className={classnames(styles.button, styles['button_variant_primary'], styles['button_no-icon'])}
            style={{ width: '240px' }}
            onClick={handleRedirect}>
            Открыть страницу товара
          </button>
        </footer>
      </div>
    </section>
  )
}
