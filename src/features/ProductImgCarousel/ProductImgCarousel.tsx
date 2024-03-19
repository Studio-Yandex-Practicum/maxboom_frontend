import { useState, type FC } from 'react'

import { ECardView } from '@/shared/model/types/common'
import { ProductLabels } from '@/shared/ui/ProductLabels/ProductLabels'

import { TProductImgCarouselProps } from './model/types/productImgCarouselType'
import styles from './ProductImgCarousel.module.scss'
import { ImgCarousel } from './ui/ImgCarousel/ImgCarousel'
import { PreviewCarousel } from './ui/PreviewCarousel/PreviewCarousel'

/**
 * Компонент переключения фотографий товара на странице товара
 * @param imgList (TImgList) - список фотографий товаров
 * @param setShowPopup (f(boolean)) - функция управления видимостью попапа
 * @param label_popular (boolean) - плашка "Популярный"
 * @param label_hit (boolean) - плашка "Хит"
 */
export const ProductImgCarousel: FC<TProductImgCarouselProps> = ({
  imgList,
  setShowPopup,
  label_popular,
  label_hit
}) => {
  const [curImg, setCurImg] = useState<number>(0)

  return (
    <section className={styles.carousel}>
      <PreviewCarousel imgList={imgList} curImg={curImg} setCurImg={setCurImg} />

      <div className={styles.carousel__wrapper}>
        <div className={styles.carousel__container}>
          <div className={styles.carousel__labels}>
            <ProductLabels layout={ECardView.GRID} label_hit={label_hit} label_popular={label_popular} />
          </div>
          <ImgCarousel isPopup={false} imgList={imgList} setShowPopup={setShowPopup} curImg={curImg} />
        </div>
      </div>
    </section>
  )
}
