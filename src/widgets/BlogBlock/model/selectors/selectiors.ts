import { StateSchema } from '@/app/providers/StoreProvider'

export const getBlogPostsSelector = (state: StateSchema) => {
  //console.log('Selector BlogPosts', state.blogPosts.posts)
  return state.blogPosts.posts
}
