import { Dispatch, SetStateAction } from 'react'

import type { IImage } from '@/shared/model/types/ImageModel'

export type TBoxProps = {
  children: React.ReactNode
}

export type TImgCarouselProps = {
  imgList: IImage[]
  isPopup: boolean
  setShowPopup: Dispatch<SetStateAction<boolean>>
  curImg: number
}

export type TImgSize = {
  width: number
  height: number
}

export type TImgSizes = {
  Xl: TImgSize
  Md: TImgSize
}

export type TDisplayedImgList = {
  displayedIndex: number
  displayedImages: IImage[]
}

export type TChangeImgArgs = 'next' | 'prev' | 'current'
