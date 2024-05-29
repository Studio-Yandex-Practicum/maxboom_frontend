import { useSelector } from 'react-redux'

import { VIEW_FOUR_ITEMS, VIEW_TEN_ITEMS, VIEW_THREE_ITEMS } from '@/shared/constants/constants'

import { getShopNewsSelector } from '../selectors/selectors'
import { ShopNewsData } from '../types/types'

const useNewsArray = () => {
  const news: ShopNewsData[] = useSelector(getShopNewsSelector)

  return {
    threeNewsArray: news.slice(0, VIEW_THREE_ITEMS),
    fourNewsArray: news.slice(0, VIEW_FOUR_ITEMS),
    mobileNewsArray: news.slice(0, VIEW_TEN_ITEMS),
    allNewsArray: news
  }
}

export default useNewsArray
