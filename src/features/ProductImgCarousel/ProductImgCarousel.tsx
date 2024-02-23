import { useState, type FC } from 'react'

import { TProductImgCarouselProps } from './model/types/productImgCarouselType'
import styles from './ProductImgCarousel.module.scss'
import { ImgCarousel } from './ui/ImgCarousel/ImgCarousel'
import { PreviewCarousel } from './ui/PreviewCarousel/PreviewCarousel'

/**
 * Компонент переключения фотографий товара на странице товара
 * @param imgList (TImgList) - список фотографий товаров
 * @param setShowPopup (f(boolean)) - функция управления видимостью попапа
 */
export const ProductImgCarousel: FC<TProductImgCarouselProps> = ({ imgList, setShowPopup }) => {
  const [curImg, setCurImg] = useState<number>(0)

  return (
    <section className={styles.wrapper}>
      <PreviewCarousel imgList={imgList} curImg={curImg} setCurImg={setCurImg} />
      <div className={styles.carouselwrapper}>
        <div className={styles.maincontainer}>
          {<ImgCarousel isPopup={false} imgList={imgList} setShowPopup={setShowPopup} curImg={curImg} />}
        </div>
      </div>
    </section>
  )
}
