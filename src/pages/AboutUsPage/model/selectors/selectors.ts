import { StateSchema } from '@/app/providers/StoreProvider'

export const getAboutUsSelector = (state: StateSchema) => {
  return state.aboutUs.result
}
