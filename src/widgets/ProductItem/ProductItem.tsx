import classnames from 'classnames'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { ProductAvailability } from '@/features/ProductAvailability/ProductAvailability'
import { WidgetButtonsFunctions } from '@/features/WidgetButtonsFunctions/WidgetButtonsFunctions'
import { WidgetButtonsPurchase } from '@/features/WidgetButtonsPurchase/WidgetButtonsPurchase'
import { TImgList } from '@/pages/ProductsPage/types/types'
import { Routes } from '@/shared/config/routerConfig/routes'
import { ECardView } from '@/shared/model/types/common'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Modal from '@/shared/ui/Modal/Modal'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { ProductLabels } from '@/shared/ui/ProductLabels/ProductLabels'
import { getStylesForCurrentLayout } from '@/shared/ui/ProductLabels/utils/utils'
import Carousel from '@/widgets/Carousel/Carousel'
import { CardPreview } from '@/widgets/ProductItem/CardPreview/CardPreview'

import styles from './ProductItem.module.scss'

type TProductCard = {
  layout: ECardView
  name: string
  price: number
  brand: string
  slug: string
  description: string
  code: number
  images: TImgList
  label_hit: boolean
  label_popular: boolean
  quantity: number
}

/**
 * Компонент карточки товара в списке товаров.
 * @param {string} layout - тип выбранной сетки отображения карточек товаров;
 */
export const ProductItem: FC<TProductCard> = ({
  layout,
  name,
  price,
  brand,
  slug,
  description,
  code,
  images,
  label_popular,
  label_hit,
  quantity
}) => {
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isInCompared, setIsInCompared] = useState<boolean>(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen)
  }
  const handleAddToCart = () => {
    setIsInCart(!isInCart)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddToCompared = () => {
    setIsInCompared(!isInCompared)
  }

  const handleCutDescription = () => {
    let sliced: string = description.slice(0, 175)
    if (sliced.length < description.length) {
      sliced += '...'
    }
    return sliced
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={changeModalState}
          isModalClosing={isModalClosing}
          setIsModalClosing={setIsModalClosing}>
          <CardPreview
            code={code}
            name={name}
            price={price}
            brand={brand}
            slug={slug}
            images={images}
            quantity={quantity}
          />
        </Modal>
      )}
      <div
        className={classnames(styles['product-item'], {
          [getStylesForCurrentLayout('product-item', styles)[layout]]: layout
        })}>
        {layout === 'list' && (
          <div
            className={classnames(styles['product-item__buttons'], {
              [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
            })}>
            <WidgetButtonsFunctions
              isLiked={isLiked}
              isInCompared={isInCompared}
              handleLike={handleLike}
              handleAddToCompared={handleAddToCompared}
              layout={layout}
            />
          </div>
        )}
        <div
          className={classnames(styles['product-item__header'], {
            [getStylesForCurrentLayout('product-item__header', styles)[layout]]: layout
          })}>
          <ProductLabels layout={layout} label_hit={label_hit} label_popular={label_popular} />
          {layout === 'grid' && (
            <div
              className={classnames(styles['product-item__buttons'], {
                [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
              })}>
              <WidgetButtonsFunctions
                isLiked={isLiked}
                isInCompared={isInCompared}
                handleLike={handleLike}
                handleAddToCompared={handleAddToCompared}
                layout={layout}
              />
            </div>
          )}
        </div>
        <Carousel photos={images} layout={layout} />
        <div
          className={classnames(styles['product-item__description'], {
            [getStylesForCurrentLayout('product-item__description', styles)[layout]]: layout
          })}>
          <div
            className={classnames(styles['product-item__description-container'], {
              [getStylesForCurrentLayout('product-item__description-container', styles)[layout]]: layout
            })}>
            <ProductAvailability code={code} quantity={quantity} />
            <Link to={`${Routes.PRODUCT}/${slug}`} className={styles['product-item__link']}>
              <Heading type={HeadingType.PRODUCT}>{name}</Heading>
            </Link>
            <div
              className={classnames(styles['product-item__price-block'], {
                [getStylesForCurrentLayout('product-item__price-block', styles)[layout]]: layout
              })}>
              <span className={styles['product-item__price']}>{price} ₽</span>
              {layout !== 'compact' && (
                <div
                  className={classnames(styles['product-item__actions-block'], {
                    [getStylesForCurrentLayout('product-item__actions-block', styles)[layout]]: layout
                  })}>
                  <WidgetButtonsPurchase
                    isInCart={isInCart}
                    handleAddToCart={handleAddToCart}
                    onEyeClick={changeModalState}
                    layout={layout}
                  />
                </div>
              )}
            </div>
          </div>
          {layout === 'list' && <Paragraph>{handleCutDescription()}</Paragraph>}
          {layout === 'compact' && (
            <div
              className={classnames(styles['product-item__buttons'], {
                [getStylesForCurrentLayout('product-item__buttons', styles)[layout]]: layout
              })}>
              <WidgetButtonsPurchase
                isInCart={isInCart}
                handleAddToCart={handleAddToCart}
                onEyeClick={changeModalState}
                layout={layout}
              />
              <WidgetButtonsFunctions
                isLiked={isLiked}
                isInCompared={isInCompared}
                handleLike={handleLike}
                handleAddToCompared={handleAddToCompared}
                layout={layout}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
