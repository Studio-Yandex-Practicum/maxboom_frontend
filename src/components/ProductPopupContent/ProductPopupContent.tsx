import React, { FC, useState } from 'react'
import classnames from 'classnames'
import IconCompare from '../../assets/icons/IconCompare'
import IconLike from '../../assets/icons/IconLike'
import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import styles from './ProductPopupContent.module.scss'
import { Button } from '../../ui/Button/Button'

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
            <Button size="xs" color="transparent" onClick={handleLike}>
              <IconLike
                styles={classnames(styles.icon, {
                  [styles['active']]: isLiked
                })}
              />
              В избранное
            </Button>
            <Button size="xs" color="transparent" onClick={handleAddToCompared}>
              <IconCompare
                styles={classnames(styles.icon, {
                  [styles['active']]: isInCompared
                })}
              />
              В сравнение
            </Button>
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
            <Button color={isInCart ? 'success' : 'primary'} size="m" onClick={handleAddToCart}>
              Купить
            </Button>
            <Button color="secondary" size="m" onClick={handleQuickPurchase}>
              Быстрый заказ{' '}
            </Button>
          </div>
        </main>
        <footer className={styles.footer}>
          <Button size="l" color="primary" onClick={handleRedirect}>
            Открыть страницу товара
          </Button>
        </footer>
      </div>
    </section>
  )
}
