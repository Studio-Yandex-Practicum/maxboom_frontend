import { useSelector } from 'react-redux'

import { VIEW_FOUR_ITEMS, VIEW_TEN_ITEMS, VIEW_THREE_ITEMS } from '@/shared/constants/constants'

import { getBlogPostsSelector } from '../selectors/selectors'
import { IBlogPostData } from '../types/types'

const useBlogArray = () => {
  const posts: IBlogPostData[] = useSelector(getBlogPostsSelector)

  return {
    threeBlogArray: posts.slice(0, VIEW_THREE_ITEMS),
    fourBlogArray: posts.slice(0, VIEW_FOUR_ITEMS),
    mobileBlogArray: posts.slice(0, VIEW_TEN_ITEMS),
    allBlogArray: posts
  }
}

export default useBlogArray
