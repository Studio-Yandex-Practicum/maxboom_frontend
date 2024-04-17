import { FC, lazy, useState, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { StateSchema } from '@/app/providers/StoreProvider'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import IconCart from '@/assets/icons/IconCart.svg'
import { isInCartBySlug } from '@/entities/CartEntity/model/functions/cartHelper'
import { addToCart } from '@/entities/CartEntity/model/slice/cartEntitySlice'
import { CardPreviewFooter } from '@/features/CardPreviewFooter/CardPreviewFooter'
import { CardPreviewHeader } from '@/features/CardPreviewHeader/CardPreviewHeader'
import { ProductAvailability } from '@/features/ProductAvailability/ProductAvailability'
import { ProductImgCarousel } from '@/features/ProductImgCarousel/ProductImgCarousel'
import type { TImgList } from '@/pages/ProductsPage/types/types'
import { Routes } from '@/shared/config/routerConfig/routes'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import { PopupImg } from '@/widgets/Product/ui/PopupImg/PopupImg'

import styles from './CardPreview.module.scss'

const LazyQuickPurchaseForm = lazy(() => import('@/features/QuickPurchase/index'))

type Props = {
  code: number
  price: number
  brand: string
  slug: string
  images: TImgList
  quantity: number
  id: number
}

/**
 * Компонент с контентом поп-апа предварительного просмотра товара.
 * @param {number} code - артикул товара;
 * @param {number} price - цена;
 * @param {string} brand - производитель;
 * @param {string} slug - URL для страницы товара;
 * @param {TImgList} images - массив с изображениями;
 * @param {number} quantity - количество на склаладе (если  > 0, то товар считается в наличии);
 */
export const CardPreview: FC<Props> = ({ code, images, slug, brand, quantity, price, id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((store: StateSchema) => store.cartEntity)

  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  useEffect(() => {
    setIsInCart(isInCartBySlug(slug, cart.cart.products))
  }, [slug, cart.cart.products])

  const addThisToCart = () => {
    if (id) {
      dispatch(addToCart({ product: id, cart: cart.cart.id, amount: 1 }))
    }
  }

  const handleAddToCart = () => {
    if (!isInCart) {
      addThisToCart()
    } else {
      navigate(Routes.CART)
    }
  }

  const handleQuickPurchase = () => {
    setIsModalOpen(true)
  }

  const handleRedirect = () => {
    navigate(`${Routes.PRODUCT}/${slug}`)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <Suspense fallback={<Spinner />}>
            <LazyQuickPurchaseForm setIsModalClosing={setIsModalClosing} />
          </Suspense>
        </Modal>
      )}
      <section className={styles['modal-card']}>
        <ProductImgCarousel imgList={images} setShowPopup={setShowPopup} />
        {showPopup && <PopupImg imgList={images} setShowPopup={setShowPopup} />}
        {/*  /!* @TODO: Добавить компонент для фотографии товара*/}
        {/*https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/41 *!/*/}
        {/*  <img src={`${images[0].image}`} alt={name} className={styles['modal-card__image']} />*/}
        <div className={styles.description}>
          <CardPreviewHeader
            brand={brand}
            isLiked={isLiked}
            isInCompared={isInCompared}
            handleLike={handleLike}
            handleAddToCompared={handleAddToCompared}
          />
          <main className={styles.main}>
            <ProductAvailability code={code} quantity={quantity} />
            {/* @TODO: Завести shared/ui-компоненты под типографику
         https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/77 */}
            <Paragraph className={styles.price}>{price} ₽</Paragraph>
            <Paragraph className={styles.quantity}>
              {quantity} или более {price} ₽
            </Paragraph>
            <div className={styles.buttons}>
              <Button
                theme={isInCart ? ButtonTheme.SUCCESS : ButtonTheme.PRIMARY}
                size={ButtonSize.S}
                onClick={handleAddToCart}
                className={styles.customButton}>
                {isInCart ? 'Перейти в корзину' : 'Купить'}
                <IconCart />
              </Button>
              <Button theme={ButtonTheme.SECONDARY} size={ButtonSize.S} onClick={handleQuickPurchase}>
                Быстрый заказ
              </Button>
            </div>
          </main>
          <CardPreviewFooter handleRedirect={handleRedirect} />
        </div>
      </section>
    </>
  )
}
