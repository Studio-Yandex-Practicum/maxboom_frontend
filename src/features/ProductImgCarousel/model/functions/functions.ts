import type { IImage } from '@/shared/model/types/ImageModel'

/**
 * Функция получения массива первью товара из массива фотографий товара.
 * @param {IImage[]} imgList список изображений
 * @param {number} maxCount количесвто вырезаемых элементов
 * @param {number}  lastElement значение индекса до которого вырезаются элементы
 */
export const slicedImgList = (imgList: IImage[], maxCount: number, lastElement: number): IImage[] => {
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
 * @param {number} maxCount количесвто элементов на экране
 * @param {number} lastElement значение индекса элемента
 */
export const getDisplayedIndex = (maxCount: number, lastElement: number): number => {
  return lastElement > maxCount - 1 ? maxCount - 1 : lastElement
}
