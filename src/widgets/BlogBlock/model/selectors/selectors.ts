import { StateSchema } from '@/app/providers/StoreProvider'

export const getBlogPostsSelector = (state: StateSchema) => {
  return state.blogPosts.posts
}
