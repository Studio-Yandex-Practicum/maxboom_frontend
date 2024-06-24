import { type FC, lazy, useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

import IconCart from '@/assets/icons/IconCart.svg'
import WB from '@/assets/icons/WB.svg'
import { useProductInCart } from '@/entities/CartEntity/model/hooks/cartHooks'
import { useWithFavorite } from '@/entities/Favorite/model/hooks/useWithFavorie'
import { ProductAvailability } from '@/entities/ProductAvailability/ProductAvailability'
import { ProductImgCarousel } from '@/entities/ProductImgCarousel/ProductImgCarousel'
import { CardPreviewFooter } from '@/features/CardPreviewFooter/CardPreviewFooter'
import { CardPreviewHeader } from '@/features/CardPreviewHeader/CardPreviewHeader'
import { Routes } from '@/shared/config/routerConfig/routes'
import { IProduct } from '@/shared/model/types/ProductModel'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Spinner from '@/shared/ui/Spinner/Spinner'
import { PopupImg } from '@/widgets/Product/ui/PopupImg/PopupImg'

import styles from './CardPreview.module.scss'

const LazyQuickPurchaseForm = lazy(() => import('@/features/QuickPurchase'))

type TProps =
  | 'name'
  | 'price'
  | 'brand'
  | 'slug'
  | 'description'
  | 'code'
  | 'images'
  | 'label_hit'
  | 'label_popular'
  | 'quantity'
  | 'id'
  | 'wb_urls'

type TCardPreviewProps = Pick<IProduct, TProps>

/**
 * Компонент с контентом поп-апа предварительного просмотра товара
 * @param {string} name - название товара;
 * @param {number} price - цена;
 * @param {string} brand - производитель;
 * @param {string} slug - URL для страницы товара;
 * @param {string} description - описание;
 * @param {number} code - артикул;
 * @param {IImage[]} images - массив с изображениями;
 * @param {boolean} label_popular - лейбл Популярный на товаре;
 * @param {boolean} label_hit - лейбл Хит на товаре;
 * @param {number} quantity - количество на склаладе (если  > 0, то товар считается в наличии);
 * @param {number} id - id товара в backend;
 * @param {string} wb_urls - ссылка на товар на wb
 */
export const CardPreview: FC<TCardPreviewProps> = ({
  name,
  price,
  brand,
  slug,
  description,
  code,
  images,
  label_popular,
  label_hit,
  quantity,
  id,
  wb_urls
}) => {
  const navigate = useNavigate()
  const { isInCart, handleAddToCart } = useProductInCart(slug, id)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const { isLiked, handleLike } = useWithFavorite({
    id,
    category: '',
    wb_urls,
    is_deleted: false,
    wholesale: 0,
    name,
    brand,
    slug,
    description,
    price,
    code,
    images,
    label_popular,
    label_hit,
    quantity
  })

  const handleQuickPurchase = () => {
    setIsModalOpen(true)
  }

  const handleRedirect = () => {
    navigate(`${Routes.PRODUCT}/${slug}`)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  const buyWBHandle = () => {
    window.open(wb_urls, '_blank')
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
        <div className={styles.description}>
          <CardPreviewHeader
            brand={brand}
            isLiked={isLiked}
            isInCompared={isInCompared}
            handleLike={handleLike}
            handleAddToCompared={handleAddToCompared}
          />
          <main className={styles.main}>
            <ProductAvailability code={code} quantity={quantity || 0} />
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
                <IconCart className={styles.icon} />
              </Button>
              {wb_urls && (
                <Button
                  theme={ButtonTheme.PRIMARY}
                  size={ButtonSize.S}
                  onClick={buyWBHandle}
                  className={styles.customButton}>
                  Купить на
                  <WB />
                </Button>
              )}
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
