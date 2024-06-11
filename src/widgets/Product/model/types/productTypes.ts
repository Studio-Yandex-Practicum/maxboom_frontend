import { Dispatch, SetStateAction } from 'react'

import type { IImage } from '@/shared/model/types/ImageModel'

export type TPopupImgProps = {
  imgList: IImage[]
  setShowPopup: Dispatch<SetStateAction<boolean>>
}
