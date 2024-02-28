import { TImgList } from '../types/productImgCarouselType'

/**
 * Функция получения массива первью товара из массива фотографий товара.
 * @param imgList: TImgList - список изображений
 * @param maxCount: number - количесвто вырезаемых элементов
 * @param lastElement: number - значение индекса до которого вырезаются элементы
 */
export const slicedImgList = (imgList: TImgList, maxCount: number, lastElement: number): TImgList => {
  if (imgList.length > maxCount) {
    let end = maxCount
    let start = 0
    if (lastElement > maxCount - 1) {
      end = lastElement + 1
      start = lastElement - (maxCount - 1)
    }
    return imgList.slice(start, end)
  }
  return imgList.slice(0)
}

/**
 * Функция получения индекса текущей выбранной отображаемой превьюшки из индекса выбранной фотографии товара
 * @param maxCount: number - количесвто элементов на экране
 * @param lastElement: number - значение индекса элемента
 */
export const getDisplayedIndex = (maxCount: number, lastElement: number): number => {
  return lastElement > maxCount - 1 ? maxCount - 1 : lastElement
}
