import { Dispatch, SetStateAction } from 'react'

export type TBoxProps = {
  children: React.ReactNode
}

interface IObjectWithImage {
  image: string
  index?: number
}

export type TImgList = Array<IObjectWithImage>

export type TImgCarouselProps = {
  imgList: TImgList
  isPopup: boolean
  setShowPopup: Dispatch<SetStateAction<boolean>>
  curImg: number
}

export type TProductImgCarouselProps = {
  imgList: TImgList
  setShowPopup: Dispatch<SetStateAction<boolean>>
}

export type TImgSize = {
  width: number
  height: number
}

export type TImgSizes = {
  Xl: TImgSize
  Md: TImgSize
}

export type TPreviewCarouselProps = {
  imgList: TImgList
  curImg: number
  setCurImg: Dispatch<SetStateAction<number>>
}

export type TDisplayedImgList = {
  displayedIndex: number
  displayedImages: TImgList
}

export type TchangeImgArgs = 'next' | 'prev' | 'current'
