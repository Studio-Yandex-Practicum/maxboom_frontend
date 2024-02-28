import { StateSchema } from '@/app/providers/StoreProvider'

export const getStoriesSelector = (state: StateSchema) => {
  return state.stories.stories
}
