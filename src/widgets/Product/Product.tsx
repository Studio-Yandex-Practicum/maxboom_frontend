import { type FC, useState } from 'react'

import IconCart from '@/assets/icons/IconCart.svg'
import WB from '@/assets/icons/WB.svg'
import { useProductInCart } from '@/entities/CartEntity/model/hooks/cartHooks'
import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { ProductAvailability } from '@/entities/ProductAvailability/ProductAvailability'
import { ProductImgCarousel } from '@/entities/ProductImgCarousel/ProductImgCarousel'
import { CardPreviewHeader } from '@/features/CardPreviewHeader/CardPreviewHeader'
import type { IProduct } from '@/shared/model/types/ProductModel'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './Product.module.scss'
import { PopupImg } from './ui/PopupImg/PopupImg'

interface IProductProps {
  product: IProduct
}

/**
 * Контейнер для карточки товара на странице товара
 * @param {IProductProps} product - информация о выбранном товаре
 */
export const Product: FC<IProductProps> = ({ product }) => {
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

  const buyWBHandle = () => {
    window.open(product.wb_urls, '_blank')
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
            <ProductAvailability code={product.code} quantity={product.quantity || 0} />
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
              {product.wb_urls && (
                <Button
                  theme={ButtonTheme.PRIMARY}
                  size={ButtonSize.S}
                  onClick={buyWBHandle}
                  className={styles.customButton}>
                  Купить на
                  <WB />
                </Button>
              )}
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
