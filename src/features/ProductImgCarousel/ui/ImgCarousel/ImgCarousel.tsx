import React, { FC, useEffect, useMemo, useState } from 'react'

import { useResize } from '@/shared/libs/hooks/useResize'

import { IMG_SIZE_PAGE, IMG_SIZE_POPUP } from '../../model/constants/constants'
import { TImgCarouselProps } from '../../model/types/productImgCarouselType'

import styles from './ImgCarousel.module.scss'

/**
 * Компонент фотографии товара на странице товара.
 * @param isPopup (boolean) - значение true, если компонент отображается в рамках попапа
 * @param imgList (TImgList) - список изображений
 * @param setShowPopup (f(boolean)) - функция управления видимостью попапа
 * @param curImg (number) - индекс текущего изображения
 */
export const ImgCarousel: FC<TImgCarouselProps> = ({ imgList, isPopup, setShowPopup, curImg }) => {
  const [offset, setOffset] = useState(() => ({
    imgOffset: '0',
    offsetX: 'center',
    offsetY: 'center'
  }))
  const [scale, setScale] = useState('contain')

  const resize = useResize()

  const getImgSise = () => {
    if (!resize.isScreenMd) {
      return isPopup ? IMG_SIZE_POPUP.Md : IMG_SIZE_PAGE.Md
    } else {
      return isPopup ? IMG_SIZE_POPUP.Xl : IMG_SIZE_PAGE.Xl
    }
  }

  const [imgSize, setImgSize] = useState(getImgSise())

  useEffect(() => {
    setImgSize(getImgSise())
  }, [resize.isScreenMd])

  useEffect(() => {
    setOffset({
      imgOffset: (-imgSize.width * curImg).toString(),
      offsetX: 'center',
      offsetY: 'center'
    })
    setScale('contain')
  }, [curImg])

  const resetScale = (): void => {
    setScale('contain')
    setOffset(prevOffset => ({
      imgOffset: prevOffset.imgOffset,
      offsetX: 'center',
      offsetY: 'center'
    }))
  }

  //Ф-я определяет, что курсор покидает картинку. Нужна т.к. события mouseOut/mouseLeave зачастую не срабатывают
  const isMouseOut = (x: number, y: number): boolean => {
    return x > imgSize.width - 10 || x < 10 || y < 10 || y > imgSize.height - 10
  }

  const moseMoveHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseOut(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
      resetScale()
    } else {
      setOffset(prevOffset => ({
        imgOffset: prevOffset.imgOffset,
        offsetX: `${Math.max(-e.nativeEvent.offsetX, -imgSize.width / 2)}px`,
        offsetY: `${-e.nativeEvent.offsetY}px`
      }))
      if (scale !== '150%') {
        setScale('150%')
      }
    }
  }

  const mouseLeaveHanle = () => {
    resetScale()
  }

  const mouseClickHandle = () => {
    setShowPopup(true)
    //фиксация body, для отключения прокрутки при откытом попапе
    //убираю скрол
    const body = document.body
    body.style.position = 'fixed'
  }

  const photoList = useMemo(() => {
    return imgList.map(i => (
      <div
        className={`${styles.imgcarousel__imageframe}`}
        key={i.index}
        style={{
          backgroundImage: `url(${i.image})`,
          backgroundPositionX: `${offset.offsetX}`,
          backgroundPositionY: `${offset.offsetY}`,
          backgroundSize: `${scale}`,
          minWidth: `100%`,
          height: `100%`,
          cursor: `${isPopup ? 'all-scroll' : 'pointer'}`
        }}
        onMouseMove={moseMoveHandle}
        onMouseOut={mouseLeaveHanle}
        onClick={!isPopup ? mouseClickHandle : undefined}></div>
    ))
  }, [imgList, offset, scale])

  return (
    <div
      className={styles.imgcarousel}
      style={{
        height: `${imgSize.height}px`
      }}>
      <div className={styles.popular}></div>

      <div
        className={styles.imgcarousel__allimg}
        style={{
          transform: `translateX(${offset.imgOffset}px)`
        }}>
        {photoList}
      </div>
    </div>
  )
}
