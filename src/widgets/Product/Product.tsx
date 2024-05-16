import { type FC, useState } from 'react'

import IconCart from '@/assets/icons/IconCart.svg'
import { useProductInCart } from '@/entities/CartEntity/model/hooks/cartHooks'
import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { CardPreviewHeader } from '@/features/CardPreviewHeader/CardPreviewHeader'
import { ProductAvailability } from '@/features/ProductAvailability/ProductAvailability'
import { ProductImgCarousel } from '@/features/ProductImgCarousel/ProductImgCarousel'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import type { TProductProps } from './model/types/productTypes'
import styles from './Product.module.scss'
import { PopupImg } from './ui/PopupImg/PopupImg'

/**
 * Контейнер для карточки товара на странице товара
 * @param {TProductProps} product - информация о выбранном товаре
 */
export const Product: FC<TProductProps> = ({ product }) => {
  const { isLiked, handleLike } = useWithFavorite(product)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  const { isInCart, handleAddToCart } = useProductInCart(product.slug, product.id)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  const handleQuickPurchase = () => {
    //TODO реализовать форму быстрого заказа
  }

  return (
    <section className={styles.product}>
      <ProductImgCarousel imgList={product.images} setShowPopup={setShowPopup} />
      <div className={styles.product__ordercontainer}>
        <div className={styles.product__order}>
          <CardPreviewHeader
            brand={product.brand}
            isLiked={isLiked}
            isInCompared={isInCompared}
            handleLike={handleLike}
            handleAddToCompared={handleAddToCompared}
          />
          <div className={styles.product__buysection}>
            <ProductAvailability code={product.code} quantity={product.quantity} />
            <div className={styles.product__pricecontainer}>
              <div className={styles.product__pq}>
                <Paragraph className={styles.product__price}>{`${product.price} ₽`}</Paragraph>
                <Paragraph
                  className={styles.product__quantity}>{`9999 или более: ${product.price} ₽`}</Paragraph>
              </div>
              <Button className={styles.product__callback} onClick={() => {}}>
                Нашли дешевле?
              </Button>
            </div>
            <div className={styles.product__buttons}>
              <Button
                className={styles.product__btnbuy}
                theme={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY}
                size={ButtonSize.S}
                onClick={handleAddToCart}>
                {isInCart ? 'Перейти в корзину' : 'Купить'}
                <IconCart className={styles.product__icon} />
              </Button>
              <Button
                className={styles.product__btnquick}
                theme={ButtonTheme.SECONDARY}
                size={ButtonSize.S}
                onClick={handleQuickPurchase}>
                Быстрый заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <PopupImg imgList={product.images} setShowPopup={setShowPopup} />}
    </section>
  )
}
