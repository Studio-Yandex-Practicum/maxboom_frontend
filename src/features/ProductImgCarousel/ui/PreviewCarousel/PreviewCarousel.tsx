import { type FC, useState, useEffect, useMemo, Dispatch, SetStateAction, MouseEvent } from 'react'

import IconArrowDown from '@/assets/icons/IconArrowDown.svg'
import IconArrowUp from '@/assets/icons/IconArrowUp.svg'
import type { IImage } from '@/shared/model/types/ImageModel'
import { Button, ButtonTheme, ButtonDesign, ButtonSize } from '@/shared/ui/Button/Button'
import { DISPLAYED_IMAGES_NUMBER } from '@/widgets/Product/model/constants/constants'

import { getDisplayedIndex, slicedImgList } from '../../model/functions/functions'
import type { TDisplayedImgList, TChangeImgArgs } from '../../model/types/productImgCarouselType'

import styles from './PreviewCarousel.module.scss'

interface IPreviewCarouselProps {
  imgList: IImage[]
  curImg: number
  setCurImg: Dispatch<SetStateAction<number>>
}

/**
 * Компонент выбора фотографии товара на странице товара.
 * @param {IImage[]} imgList список фотографий товаров
 * @param {number} curImg  индекс текущего изображения
 * @param {SetStateAction} setCurImg сеттер установки стейта для текущего изображения
 */
export const PreviewCarousel: FC<IPreviewCarouselProps> = ({ imgList, curImg, setCurImg }) => {
  const [displayed, setDisplayed] = useState<TDisplayedImgList>({
    displayedIndex: 0,
    displayedImages: []
  })

  useEffect(() => {
    setDisplayed({
      displayedImages: slicedImgList(imgList, DISPLAYED_IMAGES_NUMBER, 0),
      displayedIndex: getDisplayedIndex(DISPLAYED_IMAGES_NUMBER, 0)
    })
  }, [imgList])

  const changeImg = (direction: TChangeImgArgs, curIndex: number = 0) => {
    if (imgList.length) {
      let index: number = 0
      switch (direction) {
        case 'next':
          index = curImg < imgList.length - 1 ? curImg + 1 : 0
          break
        case 'prev':
          index = curImg > 0 ? curImg - 1 : imgList.length - 1
          break
        case 'current':
          index = curIndex
          break
      }
      setCurImg(index)
      setDisplayed({
        displayedImages: slicedImgList(imgList, DISPLAYED_IMAGES_NUMBER, index),
        displayedIndex: getDisplayedIndex(DISPLAYED_IMAGES_NUMBER, index)
      })
    }
  }

  const onNextHandle = () => {
    changeImg('next')
  }

  const onPrevHandle = () => {
    changeImg('prev')
  }

  const onImageClickHandle = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    const el = e.currentTarget as HTMLDivElement
    const index = Number(el.getAttribute('data-index'))
    changeImg('current', index)
  }

  const prevList = useMemo(() => {
    return displayed.displayedImages.map((o, index) => (
      <div
        className={`${styles.previewcarousel__imageframe} ${
          index === displayed.displayedIndex && styles.previewcarousel__imageframe_active
        }`}
        key={o.index}
        data-index={o.index}
        onClick={onImageClickHandle}>
        <img className={styles.previewcarousel__image} src={o.image} alt={`фото товара`} />
      </div>
    ))
  }, [displayed])

  return (
    <div className={styles.previewcarousel}>
      <div className={styles.previewcarousel__images}>{prevList}</div>
      <div
        className={`${styles.previewcarousel__buttons} ${
          imgList.length <= DISPLAYED_IMAGES_NUMBER && styles.previewcarousel__buttons_hidden
        }`}>
        <Button
          type="button"
          theme={ButtonTheme.OUTLINED}
          design={ButtonDesign.SQUARE}
          size={ButtonSize.M}
          className={styles.previewcarousel__button}
          onClick={onNextHandle}>
          <IconArrowDown className={styles.previewcarousel__button_arrowDown} />
        </Button>
        <Button
          type="button"
          theme={ButtonTheme.OUTLINED}
          design={ButtonDesign.SQUARE}
          size={ButtonSize.M}
          className={styles.previewcarousel__button}
          onClick={onPrevHandle}>
          <IconArrowUp className={styles.previewcarousel__button_arrowUp} />
        </Button>
      </div>
    </div>
  )
}
