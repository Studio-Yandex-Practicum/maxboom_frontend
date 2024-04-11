import { type FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import IconCart from '@/assets/icons/IconCart.svg'
import { isInCartBySlug } from '@/entities/CartEntity/model/functions/cartHelper'
import { addToCart } from '@/entities/CartEntity/model/slice/cartSlice'
import { CardPreviewHeader } from '@/features/CardPreviewHeader/CardPreviewHeader'
import { ProductAvailability } from '@/features/ProductAvailability/ProductAvailability'
import { ProductImgCarousel } from '@/features/ProductImgCarousel/ProductImgCarousel'
import { Routes } from '@/shared/config/routerConfig/routes'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import { TProductProps } from './model/types/productTypes'
import styles from './Product.module.scss'
import { PopupImg } from './ui/PopupImg/PopupImg'

/**
 * Контейнер для карточки товара на странице товара
 * @param product TProductProps - информация о выбранном товаре
 */
export const Product: FC<TProductProps> = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((store: StateSchema) => store.cart)

  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  useEffect(() => {
    setIsInCart(isInCartBySlug(product.slug, cart.cart.products))
  }, [product.slug, cart.cart.products])

  const addThisToCart = () => {
    if (product.id) {
      dispatch(addToCart({ product: product.id, cart: cart.cart.id, amount: 1 }))
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  const handleAddToCart = () => {
    if (!isInCart) {
      addThisToCart()
    } else {
      navigate(Routes.CART)
    }
  }

  const handleQuickPurchase = () => {
    console.log(cart)
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
                <IconCart />
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
