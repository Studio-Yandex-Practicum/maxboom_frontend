import { useState, type FC, Dispatch, SetStateAction } from 'react'

import { ImgCarousel } from '@/entities/ProductImgCarousel/ui/ImgCarousel/ImgCarousel'
import { PreviewCarousel } from '@/entities/ProductImgCarousel/ui/PreviewCarousel/PreviewCarousel'
import type { IImage } from '@/shared/model/types/ImageModel'

import styles from './ProductImgCarousel.module.scss'

interface IProductImgCarouselProps {
  imgList: IImage[]
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

/**
 * Компонент переключения фотографий товара на странице товара
 * @param {IImage[]} imgList  список фотографий товаров
 * @param {SetStateAction} setShowPopup  сеттер управления стейтом видимости попапа
 */
export const ProductImgCarousel: FC<IProductImgCarouselProps> = ({ imgList, setShowPopup }) => {
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
