import { FC, useMemo, useState } from 'react'

import { ImgCarousel } from '@/features/ProductImgCarousel/ui/ImgCarousel/ImgCarousel'
import { bodyScrollControl } from '@/shared/libs/helpers/popupHelper'

import { TPopupImgProps } from '../../model/types/productTypes'

import styles from './PopupImg.module.scss'

/**
 * Попап фотографии товара на странице товара.
 * @param imgList (TImgLis) - список изображений
 * @param  setShowPopup (f(boolean)) - функция управления видимостью попапа
 *  используется в компоненте ProductImgCarousel;
 */
export const PopupImg: FC<TPopupImgProps> = ({ imgList, setShowPopup }) => {
  const [curImg, setCurImg] = useState<number>(0)

  const handlePopupClose = () => {
    setShowPopup(false)
    bodyScrollControl(false)
  }

  const onImageClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    e.stopPropagation()
    setCurImg(index)
  }

  const photoList = useMemo(() => {
    return imgList.map((i, index) => {
      return (
        <div
          className={`${styles.popupImg__imageframe} ${
            index === curImg && styles.popupImg__imageframe_active
          }`}
          key={i.index}
          onClick={e => onImageClickHandle(e, Number(i.index))}>
          <img className={styles.popupImg__image} src={i.image} alt={`фото товара`} />
        </div>
      )
    })
  }, [imgList, curImg])

  return (
    <div className={styles.popupImg} onClick={handlePopupClose}>
      <div className={styles.popupImg__wrapper}>
        <div className={styles.popupImg__container}>
          <ImgCarousel isPopup={true} imgList={imgList} setShowPopup={setShowPopup} curImg={curImg} />
          <button className={styles.popupImg__closebtn} type="button" onClick={handlePopupClose}>
            ✕
          </button>
        </div>
        <div className={styles.popupImg__images}>{photoList}</div>
      </div>
    </div>
  )
}
