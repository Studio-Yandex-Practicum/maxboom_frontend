import { FC, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { CardPreviewFooter } from '../CardPreviewFooter/CardPreviewFooter'
import { CardPreviewHeader } from '../CardPreviewHeader/CardPreviewHeader'
import { ProductAvailability } from '../ProductAvailability/ProductAvailability'
import styles from './CardPreview.module.scss'

/**
 * Компонент с контентом поп-апа товара.
 */
export const CardPreview: FC = () => {
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
        src={require('@/assets/images/product/1-260x260.webp')}
        alt="GPS-трекер"
        className={styles['popup-card__image']}
      />
      <div className={styles.description}>
        <CardPreviewHeader
          isLiked={isLiked}
          isInCompared={isInCompared}
          handleLike={handleLike}
          handleAddToCompared={handleAddToCompared}
        />
        <main className={styles.main}>
          <ProductAvailability />
          {/* @TODO: Завести shared/ui-компоненты под типографику
         https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/77 */}
          <p className={styles.price}>989 ₽</p>
          <p className={styles.quantity}>9999 или более: 989 ₽</p>
          <div className={styles.buttons}>
            <Button
              theme={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY}
              size={ButtonSize.S}
              onClick={handleAddToCart}>
              Купить
            </Button>
            <Button theme={ButtonTheme.SECONDARY} size={ButtonSize.S} onClick={handleQuickPurchase}>
              Быстрый заказ{' '}
            </Button>
          </div>
        </main>
        <CardPreviewFooter handleRedirect={handleRedirect} />
      </div>
    </section>
  )
}
