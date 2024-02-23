import { TImgList } from '../types/productImgCarouselType'

export const slicedImgList = (imgList: TImgList, maxCount: number, curIndex: number): TImgList => {
  if (imgList.length > maxCount) {
    let end = maxCount
    let start = 0
    if (curIndex > maxCount - 1) {
      end = curIndex + 1
      start = curIndex - (maxCount - 1)
    }
    return imgList.slice(start, end)
  }
  return imgList.slice(0)
}

export const getDisplayedIndex = (maxCount: number, curIndex: number): number => {
  return curIndex > maxCount - 1 ? maxCount - 1 : curIndex
}
